// GET /api/download?os=windows|mac-arm64|mac-x64
//
// The installers are assets of the latest published release of the private
// app repository. This function looks the asset up with a read-only token
// and redirects the visitor to GitHub's short-lived signed download URL, so
// the repository stays private and the token never reaches the browser.
//
// Vercel environment variable: GITHUB_TOKEN — a fine-grained token with
// "Contents: Read-only" access to idereee314/neuroreplay and nothing else.

const REPO = 'idereee314/neuroreplay';
const ASSETS = {
  windows: /^NeuroReplay-Setup-.+\.exe$/,
  'mac-arm64': /^NeuroReplay-.+-mac-arm64\.dmg$/,
  'mac-x64': /^NeuroReplay-.+-mac-x64\.dmg$/,
};

function fail(res, status, message) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(message);
}

module.exports = async (req, res) => {
  const os = String(req.query.os || '');
  const pattern = ASSETS[os];
  if (!pattern) return fail(res, 400, 'Unknown platform');
  const token = process.env.GITHUB_TOKEN;
  if (!token) return fail(res, 503, 'Downloads are not configured yet');

  const headers = {
    Authorization: `Bearer ${token}`,
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'neuroreplay-site',
  };
  try {
    const release = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers: { ...headers, Accept: 'application/vnd.github+json' },
    });
    if (!release.ok) return fail(res, 502, `No published release (${release.status})`);
    const { assets = [] } = await release.json();
    const asset = assets.find(a => pattern.test(a.name));
    if (!asset) return fail(res, 404, 'This installer is not available yet');

    // asking for the binary answers with a redirect to a signed URL that
    // expires after a few minutes — pass that redirect on, never the token
    const file = await fetch(asset.url, {
      headers: { ...headers, Accept: 'application/octet-stream' },
      redirect: 'manual',
    });
    const location = file.headers.get('location');
    if (!location) return fail(res, 502, `Download link unavailable (${file.status})`);
    res.statusCode = 302;
    res.setHeader('Location', location);
    res.setHeader('Cache-Control', 'no-store');
    res.end();
  } catch (err) {
    fail(res, 502, 'GitHub is unreachable, please try again');
  }
};
