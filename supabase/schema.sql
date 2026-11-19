-- Run once in Supabase Dashboard > SQL Editor
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  plan text not null default 'free' check (plan in ('free','starter','pro')),
  credits_used int not null default 0,
  credits_limit int not null default 10,
  created_at timestamptz not null default now()
);
create table if not exists public.datasets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  columns jsonb not null,
  rows jsonb not null,
  row_count int not null,
  created_at timestamptz not null default now()
);
create table if not exists public.queries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  dataset_id uuid references public.datasets(id) on delete cascade,
  question text not null,
  answer jsonb not null,
  created_at timestamptz not null default now()
);
create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  email text,
  plan text not null,
  reference text unique,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.datasets enable row level security;
alter table public.queries enable row level security;
alter table public.payments enable row level security;

create policy "own profile read" on public.profiles for select using (auth.uid() = id);
create policy "own datasets" on public.datasets for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own queries" on public.queries for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own payments read" on public.payments for select using (auth.uid() = user_id);
-- profiles/payments are written only by the server (service role); users cannot change plan or credits.

create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email) values (new.id, new.email);
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- Table privileges (newer Supabase projects do not grant these automatically)
grant usage on schema public to anon, authenticated, service_role;
grant select on public.profiles, public.payments to authenticated;
grant select, insert, update, delete on public.datasets, public.queries to authenticated;
grant all on public.profiles, public.datasets, public.queries, public.payments to service_role;
