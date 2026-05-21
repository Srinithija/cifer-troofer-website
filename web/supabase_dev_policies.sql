-- Temporary dev RLS policies to allow anonymous inserts/selects for testing ONLY
-- Run these in the Supabase SQL editor (use the service role; do NOT commit secrets)

-- Enrollments: allow anonymous inserts for testing
ALTER TABLE IF EXISTS enrollments ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS anon_insert_enrollments
  ON enrollments
  FOR INSERT
  USING (auth.role() = 'anon' OR true)
  WITH CHECK (true);

CREATE POLICY IF NOT EXISTS anon_select_enrollments
  ON enrollments
  FOR SELECT
  USING (true);

-- Orders: allow anonymous inserts/selects for testing
ALTER TABLE IF EXISTS orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS anon_insert_orders
  ON orders
  FOR INSERT
  USING (auth.role() = 'anon' OR true)
  WITH CHECK (true);

CREATE POLICY IF NOT EXISTS anon_select_orders
  ON orders
  FOR SELECT
  USING (true);

-- Order items
ALTER TABLE IF EXISTS order_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS anon_insert_order_items
  ON order_items
  FOR INSERT
  USING (auth.role() = 'anon' OR true)
  WITH CHECK (true);

CREATE POLICY IF NOT EXISTS anon_select_order_items
  ON order_items
  FOR SELECT
  USING (true);

-- Contacts table
ALTER TABLE IF EXISTS contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY IF NOT EXISTS anon_insert_contacts
  ON contacts
  FOR INSERT
  USING (auth.role() = 'anon' OR true)
  WITH CHECK (true);

CREATE POLICY IF NOT EXISTS anon_select_contacts
  ON contacts
  FOR SELECT
  USING (true);

-- Notes:
-- 1) These policies are permissive and intended for local development only. Remove or tighten them before production.
-- 2) Prefer authenticating users and creating strict policies that validate fields and ownership.
-- 3) If you use Supabase Row Level Security, ensure "auth.role()" checks or other conditions as needed.
