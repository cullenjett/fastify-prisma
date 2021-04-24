import { createServer } from './server';

main();

async function main() {
  const server = createServer();
  await server.listen('3000', '0.0.0.0');
}
