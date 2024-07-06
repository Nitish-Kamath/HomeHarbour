import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
  plugins: [react()],
});

// secure: true means:

// A backend server running on HTTPS with an invalid certificate will not be accepted by default.

// So if you want to accept invalid (missconfigured, broken cert chain, revoked, etc. ) cert than use secure: false
