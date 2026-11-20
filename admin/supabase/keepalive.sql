-- NeuroReplay — keep-alive ping target
-- Run this once in Supabase → SQL Editor.
--
-- Free-plan Supabase projects are paused after 7 days without activity.
-- .github/workflows/supabase-keepalive.yml calls this function every 3 days
-- (POST /rest/v1/rpc/keepalive) so a real query hits the database.
-- It reads/writes no tables, so exposing it to anon leaks nothing.

create or replace function public.keepalive()
returns timestamptz
language sql
stable
as $$ select now() $$;

grant execute on function public.keepalive() to anon, authenticated;
