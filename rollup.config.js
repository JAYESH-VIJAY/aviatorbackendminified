import { terser } from "rollup-plugin-terser";
export default {
  target: "node",
  mode: "production",
  input: "app.js",
  plugins: [terser()],
  output: {
    file: "output.min.js",
    format: "esm",
  },
};
