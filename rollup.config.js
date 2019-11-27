
import copy from 'rollup-plugin-copy'

import packageJson from "./package.json";

const input = "./src/emitter.js";

export default [
  // UMD
  {
    input: input,
    output: {
      name: "emitter",
      file: packageJson.browser,
      format: "umd",
      sourcemap: true
    },
    plugins: [
      // copying sourcemap to maps directory for backward compatibility
      copy({
        targets: [{ src: packageJson.browser + '.map', dest: 'dist/maps' }],
        hook: 'writeBundle'
      })
    ]
  },
  // CommonJS 
  {
    input: input,
    output: [
      {
        file: packageJson.main,
        format: "cjs"
      }
    ],
    plugins: [
    ]
  },
  // ES module
  {
    input: input,
    output: [
      {
        file: packageJson.module,
        format: "es"
      }
    ],
    plugins: [
    ]
  }
];
