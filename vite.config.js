// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
        "icons/*.png",
      ],
      manifest: {
        name: "Portfolio Charles BOURGAULT",
        short_name: "Portfolio",
        description: "Portfolio de Charles BOURGAULT - Développeur Web",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "./icons/logo-cb-16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "./icons/logo-cb-32.png",
            sizes: "32x32",
            type: "image/png",
          },
          {
            src: "./icons/logo-cb-48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "./icons/logo-cb-72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "./icons/logo-cb-96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "./icons/logo-cb-128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "./icons/logo-cb-144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "./icons/logo-cb-152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "./icons/logo-cb-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./icons/logo-cb-384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "./icons/logo-cb-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "./icons/logo-cb-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-fa": [
            "@fortawesome/free-solid-svg-icons",
            "@fortawesome/react-fontawesome",
          ],
        },
        assetFileNames: (assetInfo) => {
          if (/\.(mp4|webm)$/i.test(assetInfo.name)) {
            return "assets/videos/[name].[hash][extname]";
          }
          return "assets/[name].[hash][extname]";
        },
      },
    },
    minify: "esbuild",
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    sourcemap: true,
  },
  server: {
    headers: {
      "Cache-Control": "public, max-age=31536000",
    },
  },
});
