import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["src/index.ts", "src/provider.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: true,
  target: "es2018",
});