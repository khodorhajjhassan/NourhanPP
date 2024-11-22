import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor libraries into separate chunk
          if (
            id.includes("node_modules/react") ||
            id.includes("node_modules/react-dom") ||
            id.includes("node_modules/react-router-dom")
          ) {
            return "vendor";
          }

          // Split components like Banner and Navbar into separate chunks
          if (id.includes("src/components")) {
            const componentName = id.split("/src/components/")[1].split("/")[0];
            return `components/${componentName}`;
          }

          // Handle other large libraries or logic here
        },
      },
    },
  },
});
