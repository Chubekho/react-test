import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // generateScopedName(name, fileName, css) {
      //   console.log({name, fileName, css});
      //   return "something..."
      // }
    }
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
