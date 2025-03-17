# test-pg

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

## Start Docker

Start docker container:

```sh
docker compose up
```

## Postgres DB

Connect to postgres on host

```sh
psql -h localhost -U postgres -d mydatabase
```

Connect to postgres on container

```sh
docker exec -it my_postgres_container psql -U postgres -d mydatabase
```
