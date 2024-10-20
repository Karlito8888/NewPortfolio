// vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa"; // Importer le plugin PWA

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // Permet de mettre à jour automatiquement le service worker
      devOptions: {
        enabled: true, // Pour activer le mode PWA en mode développement
      },
      manifest: {
        short_name: "Portfolio",
        name: "Mon Portfolio",
        lang: "fr-FR",
        start_url: "/index.html",
        id: "/index.html",
        background_color: "#FFFFFF",
        theme_color: "#70d7f7",
        display: "standalone",
        description: "Développeur Web Frontend à Paris",
        icons: [
          {
            src: "./icons/logo-cb-16.png",
            type: "image/png",
            sizes: "16x16",
          },
          {
            src: "./icons/logo-cb-32.png",
            type: "image/png",
            sizes: "32x32",
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
            src: "./icons/logo-cb-180.png",
            type: "image/png",
            sizes: "180x180",
          },
          {
            src: "./icons/logo-cb-192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "./icons/logo-cb-256.png",
            type: "image/png",
            sizes: "256x256",
          },
          {
            src: "./icons/logo-cb-384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "./icons/logo-cb-512.png",
            type: "image/png",
            sizes: "512x512",
          },
        ],
        screenshots: [
          {
            src: "/screenshots/screenshot-1-wide.png",
            sizes: "1920x1080",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/screenshots/screenshot-2-wide.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/screenshots/screenshot-1-narrow.png",
            sizes: "1080x1920",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "/screenshots/screenshot-2-narrow.png",
            sizes: "720x1280",
            type: "image/png",
            form_factor: "narrow",
          },
        ],
        categories: ["portfolio", "education", "productivity"],
      },
    }),
  ],
});

