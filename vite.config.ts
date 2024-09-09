import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteVConsole } from "vite-plugin-vconsole";
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteVConsole({
      entry: [resolve("src/main.tsx")],
      enabled: true,
      localEnabled: true,
      config: {
        maxLogNumber: 1000,
        theme: "dark",
      },
    }),
  ],
});
