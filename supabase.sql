create table results (
  id bigint generated always as identity primary key,
  name text not null,
  matric text not null,
  score int not null,
  total int not null,
  created_at timestamptz default now()
);
alter table results enable row level security; -- no policies: only the server (service key) can read/write
