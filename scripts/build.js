const { join } = require('path');

const { build } = require('esbuild');

const packageJson = require('../package.json');

process.env.NODE_ENV = 'development';

const TS_APP_ENTRYPOINT = join(__dirname, '../src/index.ts');
const JS_APP_ENTRYPOINT = join(__dirname, '../dist/index.js');

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

async function main() {
  await build({
    entryPoints: [TS_APP_ENTRYPOINT],
    outfile: JS_APP_ENTRYPOINT,
    platform: 'node',
    format: 'cjs',
    target: ['es2020'],
    bundle: true,
    external: Object.keys(packageJson.dependencies),
  });
}
