create policy "allow_public_insert" on leads
  for insert
  with check (true);

create policy "allow_public_select_own" on leads
  for select
  using (true);
