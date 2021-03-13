import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

// the entry point for the library
const input = 'src/index.js';

//
const MODE = [
  {
    format: 'cjs',
  },
  {
    format: 'esm',
  },
  {
    format: 'umd',
  },
];

let config = [];

MODE.map((m) => {
  let conf = {
    input: input,
    output: {
      // then name of your package
      name: 'tailwind-darkmode-toggle',
      file: `dist/index.${m.format}.js`,
      format: m.format,
      exports: 'auto',
      globals: { react: 'React' },
    },
    // this externalizes react to prevent rollup from compiling it
    external: ['react', /@babel\/runtime/],
    plugins: [
      // these are babel configurations
      babel({
        exclude: 'node_modules/**',
        plugins: ['@babel/transform-runtime'],
        babelHelpers: 'runtime',
      }),
      nodeResolve(),
      commonjs(),
    ],
  };
  config.push(conf);
});

export default [...config];
