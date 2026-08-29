-- NeuroReplay — demo/order requests table
-- Run this once in Supabase → SQL Editor.
-- The public website inserts rows anonymously (anon key + RLS insert-only);
-- logged-in admins read & update them in /admin/ (Захиалгууд tab).

create table if not exists public.demo_requests (
  id                 bigint generated always as identity primary key,
  created_at         timestamptz not null default now(),
  fullname           text not null,
  organization       text,
  email              text not null,
  phone              text,
  usecase            text,
  cameras            integer,
  preferred_language text,
  plan               text,
  message            text,
  status             text not null default 'new',   -- new | contacted | done
  source             text default 'website'
);

alter table public.demo_requests enable row level security;

-- Table-level privileges (RLS policies apply on top of these grants).
grant insert on public.demo_requests to anon;
grant select, insert, update, delete on public.demo_requests to authenticated;

-- Anyone (public website, anon key) may submit a request — INSERT only.
drop policy if exists "anon insert demo requests" on public.demo_requests;
create policy "anon insert demo requests"
  on public.demo_requests for insert
  to anon, authenticated
  with check (true);

-- Only logged-in admins may read the list.
drop policy if exists "auth read demo requests" on public.demo_requests;
create policy "auth read demo requests"
  on public.demo_requests for select
  to authenticated
  using (true);

-- Only logged-in admins may update a request (e.g. change status).
drop policy if exists "auth update demo requests" on public.demo_requests;
create policy "auth update demo requests"
  on public.demo_requests for update
  to authenticated
  using (true)
  with check (true);

-- Only logged-in admins may delete a request.
drop policy if exists "auth delete demo requests" on public.demo_requests;
create policy "auth delete demo requests"
  on public.demo_requests for delete
  to authenticated
  using (true);

create index if not exists demo_requests_created_idx
  on public.demo_requests (created_at desc);
