// NeuroReplay — server-side license signer (Supabase Edge Function)
// ===================================================================
// Signs .lic files and hardware-bound key tokens with the Ed25519 PRIVATE
// key, which lives ONLY here as a Supabase secret (NR_PRIVATE_KEY_B64) and
// never reaches the browser. The desktop app ships only the matching public
// key and verifies these signatures.
//
// Deploy:
//   supabase functions deploy sign-license
//   supabase secrets set NR_PRIVATE_KEY_B64="<base64 of PKCS8 DER private key>"
//
// Request (POST, requires a logged-in Supabase user):
//   { "type": "lic", "event": "...", "start": "YYYY-MM-DD", "end": "YYYY-MM-DD", "features": ["competition","analyze"], "maxCameras": 4 }
//   { "type": "key", "hwid": "16CHARHEX",  "start": "YYYY-MM-DD", "end": "YYYY-MM-DD", "features": ["competition"], "maxCameras": 4 }
// `features` is optional and defaults to ["competition"]. `maxCameras` is
// optional and omitted/falsy means unlimited. The signed payload MUST stay
// byte-identical to license.js's generateLic/generateKey on the desktop app
// (same field order, same comma-joined sorted feature list, same trailing
// maxCameras segment) or verification there will fail.
// Response: { "token": "<base64 license token>" }

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

// Import the PKCS8 Ed25519 private key once.
let privateKeyPromise: Promise<CryptoKey> | null = null;
function getPrivateKey(): Promise<CryptoKey> {
  if (!privateKeyPromise) {
    const b64 = Deno.env.get("NR_PRIVATE_KEY_B64");
    if (!b64) throw new Error("NR_PRIVATE_KEY_B64 secret is not set");
    const der = Uint8Array.from(atob(b64.trim()), (c) => c.charCodeAt(0));
    privateKeyPromise = crypto.subtle.importKey(
      "pkcs8",
      der,
      { name: "Ed25519" },
      false,
      ["sign"],
    );
  }
  return privateKeyPromise;
}

async function sign(payload: string): Promise<string> {
  const key = await getPrivateKey();
  const sig = await crypto.subtle.sign(
    { name: "Ed25519" },
    key,
    new TextEncoder().encode(payload),
  );
  return btoa(String.fromCharCode(...new Uint8Array(sig)));
}

function encodeToken(obj: Record<string, unknown>): string {
  return btoa(unescape(encodeURIComponent(JSON.stringify(obj))));
}

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
// Same rule as license.js isStrictDate(): the app rejects impossible dates
// (2026-02-30), so signing one would hand out a license that never works.
function isStrictDate(s: unknown): boolean {
  if (typeof s !== "string" || !DATE_RE.test(s)) return false;
  const [y, m, d] = s.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d;
}
const MAX_CAMERAS = 64;
const ALL_FEATURES = ["competition", "analyze", "minimal", "legacy", "multiview"];

// Mirrors license.js's normalizeFeatures() exactly — dedupe, drop anything
// not in the known set, sort, so both sides sign/verify the same string.
function normalizeFeatures(features: unknown): string[] {
  const list = Array.isArray(features) && features.length ? features : ["competition"];
  return [...new Set(list)].filter((f) => ALL_FEATURES.includes(f)).sort();
}

// Mirrors license.js's normalizeMaxCameras() exactly.
function normalizeMaxCameras(maxCameras: unknown): number | null {
  const n = Number(maxCameras);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "POST only" }, 405);

  // ── Require a real, logged-in user (not just the public anon key) ──
  const authHeader = req.headers.get("Authorization") ?? "";
  try {
    const sb = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } },
    );
    const { data, error } = await sb.auth.getUser();
    if (error || !data?.user) return json({ error: "Unauthorized" }, 401);
    // Optional allowlist: NR_ADMIN_EMAILS="a@x.mn,b@y.mn". Sign-ups are
    // disabled in Auth today; this keeps signing locked even if that changes.
    const allow = (Deno.env.get("NR_ADMIN_EMAILS") ?? "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
    if (allow.length && !allow.includes((data.user.email ?? "").toLowerCase())) {
      return json({ error: "Forbidden" }, 403);
    }
  } catch (_) {
    return json({ error: "Unauthorized" }, 401);
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch (_) {
    return json({ error: "Invalid JSON" }, 400);
  }

  const { type, event, hwid, start, end } = body as Record<string, string>;
  const features = normalizeFeatures(body.features);
  const maxCameras = normalizeMaxCameras(body.maxCameras);
  if (!isStrictDate(start) || !isStrictDate(end)) {
    return json({ error: "Bad dates (YYYY-MM-DD)" }, 400);
  }
  if (end < start) return json({ error: "end before start" }, 400);
  if (maxCameras !== null && maxCameras > MAX_CAMERAS) {
    return json({ error: `maxCameras must be 1-${MAX_CAMERAS}` }, 400);
  }

  try {
    if (type === "lic") {
      if (typeof event !== "string" || !event.trim()) return json({ error: "event required" }, 400);
      if (event.length > 120 || /[\u0000-\u001f\u007f]/.test(event)) {
        return json({ error: "event must be 1-120 printable characters" }, 400);
      }
      const issued = new Date().toISOString().slice(0, 10);
      const sig = await sign(`${event}|${start}|${end}|${issued}|${features.join(",")}|${maxCameras ?? ""}`);
      return json({ token: encodeToken({ event, start, end, issued, features, maxCameras, sig }) });
    }

    if (type === "key") {
      const id = (hwid ?? "").toUpperCase();
      if (!/^[0-9A-F]{16}$/.test(id)) return json({ error: "hwid must be 16 hex chars" }, 400);
      const sig = await sign(`${id}|${start}|${end}|${features.join(",")}|${maxCameras ?? ""}`);
      return json({ token: encodeToken({ start, end, features, maxCameras, sig }) });
    }

    return json({ error: "type must be 'lic' or 'key'" }, 400);
  } catch (e) {
    return json({ error: String((e as Error).message ?? e) }, 500);
  }
});
