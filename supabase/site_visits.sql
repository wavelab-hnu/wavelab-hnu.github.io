-- Visitor counter for the WAVE Lab site (run once in Supabase → SQL Editor)
create table if not exists site_visits (
  day date primary key,
  hits int not null default 0
);
alter table site_visits enable row level security;  -- no policies: visitors can't touch the table directly

-- The only way in: count one visit (optional) and return today's and total numbers
create or replace function visit(do_count boolean default true)
returns json
language plpgsql
security definer
set search_path = public
as $$
declare d date := (now() at time zone 'Asia/Seoul')::date;
begin
  if do_count then
    insert into site_visits (day, hits) values (d, 1)
    on conflict (day) do update set hits = site_visits.hits + 1;
  end if;
  return json_build_object(
    'today', coalesce((select hits from site_visits where day = d), 0),
    'total', coalesce((select sum(hits) from site_visits), 0)
  );
end $$;

revoke all on function visit(boolean) from public;
grant execute on function visit(boolean) to anon, authenticated;
