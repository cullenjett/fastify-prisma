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
# Install dependencies
yarn install

# Start a Docker container running our postresql database
yarn start:db

# Run database migrations
yarn prisma migrate dev

# Generate prisma client for the app
yarn prisma generate

# Start the fastify server for local dev
yarn dev
```

## Available Commands

- `yarn dev`

  - Run the fastify server and restart on file change

- `yarn start:db`

  - Start the postgres database Docker container

- `yarn stop:db`

  - Kill the running postgres database Docker container

- `yarn prisma <command>`

  - Run prisma commands without installing the prisma client globally

- `yarn repl`

  - Start a Node repl with the prisma client made available

- `yarn repl`

  - Start a Node repl with the prisma client made available
