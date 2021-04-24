# Fastify Prisma Playground App

Toying around with [fastify](https://www.fastify.io/), [prisma](https://www.prisma.io), and other new hotness from the JS ecosystem.

## Buzz Words

Tech used so far:

- fastify -- app server
- prisma -- ORM
- postgresql -- database (via Docker)
- esbuild -- speedy compiler

## Initial Setup

The first time here you need to install dependencies, start postgresql, run database migrations, and generate the prisma client

```sh
yarn install
yarn start:db
yarn prisma migrate dev
yarn prisma generate
```

## Commands

- `yarn dev`

  - Run the fastify server and restart on file change

- `yarn stop:db`

  - Kill the running postgres database Docker container

- `yarn repl`

  - Start a Node repl with the prisma client made available
