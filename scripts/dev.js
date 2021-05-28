const { join } = require('path');

const { build } = require('esbuild');
const execa = require('execa');

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
    watch: {
      onRebuild() {
        restart();
      },
    },
  });

  const { restart } = startApp(JS_APP_ENTRYPOINT);
}

function startApp(entryPoint) {
  let subprocess = runNodeProcess(entryPoint);

  const restart = () => {
    subprocess.cancel();
    subprocess = runNodeProcess(entryPoint);
  };

  return { subprocess, restart };
}

function runNodeProcess(filepath) {
  const subprocess = execa.node(filepath, { env: { FORCE_COLOR: true } });
  subprocess.stdout.pipe(process.stdout);
  subprocess.stderr.pipe(process.stderr);
  return subprocess;
}
