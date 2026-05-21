-- Additional tables for enrollments and cart items
create extension if not exists "pgcrypto";

create table if not exists enrollments (
  id uuid primary key default gen_random_uuid(),
  course_id uuid references courses(id),
  name text,
  email text,
  phone text,
  message text,
  metadata jsonb,
  created_at timestamptz default now()
);

create table if not exists cart_items (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id),
  name text,
  price numeric(10,2),
  quantity int default 1,
  metadata jsonb,
  created_at timestamptz default now()
);

-- Example RLS policy to allow anonymous inserts for enrollments and cart items
-- Run these only if you want unauthenticated users to be able to submit forms.
-- alter table enrollments enable row level security;
-- create policy allow_insert_enrollments on enrollments for insert using (true) with check (true);

-- alter table cart_items enable row level security;
-- create policy allow_insert_cart on cart_items for insert using (true) with check (true);
