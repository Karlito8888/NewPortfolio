// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module',
      },
      manifest: {
        short_name: "Portfolio",
        name: "Mon Portfolio",
        lang: "fr-FR",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#70d7f7",
        display: "standalone",
        description: "Développeur Web Frontend à Paris",
        categories: ["portfolio", "education", "productivity"],
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
      },
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,pdf}'
        ],
        cleanupOutdatedCaches: true,
        sourcemap: true,
        navigateFallback: 'index.html',
        runtimeCaching: [
          {
            urlPattern: /\.(js|css|woff2?|ttf|eot)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-assets',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 jours
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(png|jpg|jpeg|gif|svg|ico|webp)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 jours
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.pdf$/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pdf-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 7 * 24 * 60 * 60 // 1 semaine
              },
              cacheableResponse: {
                statuses: [0, 200]
              },
              networkTimeoutSeconds: 3
            }
          },
          {
            urlPattern: /^[^?]*([?].*)?$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'spa-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 24 * 60 * 60 // 1 jour
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },
      strategies: 'generateSW',
      injectRegister: 'auto',
      minify: true,
      filename: 'sw.js',
      manifestFilename: 'manifest.webmanifest',
      includeAssets: ['favicon.ico', 'robots.txt', 'icons/*.png'],
    }),
  ],
  build: {
    sourcemap: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          style: ['./src/styles/index.scss']
        }
      }
    }
  }
});