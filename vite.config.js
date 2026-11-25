import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "/" porque o site roda na raiz do domínio kauegalon.com
export default defineConfig({
  plugins: [react()],
  base: "/",
});
