create table if not exists public.retiras_state (
  id text primary key check (id = 'main'),
  payload jsonb not null default '{"users": []}'::jsonb
);

alter table public.retiras_state enable row level security;
revoke all on table public.retiras_state from public, anon, authenticated;
grant select, insert, update, delete on table public.retiras_state to service_role;
