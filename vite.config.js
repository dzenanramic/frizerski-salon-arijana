import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/frizerski-salon-arijana/", // Must match repo name EXACTLY
  build: {
    outDir: "dist", // Ensure this matches GitHub Pages folder
  },
});
