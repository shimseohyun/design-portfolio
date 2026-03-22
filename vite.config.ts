import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@V01/layouts": path.resolve(__dirname, "src/v01/layouts"),
      "@V01/pages": path.resolve(__dirname, "src/v01/pages"),
      "@V01/router": path.resolve(__dirname, "src/v01/router"),
    },
  },
});
