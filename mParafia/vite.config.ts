import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mParafia/",
  build: {
    sourcemap: true,
    target: ["esnext"],
    cssMinify: true,
  },
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: false,
      workbox: {
        globPatterns: ['**/*.{html,js,css,json,png,ico,svg,jpg}'],
        navigateFallback: '/mParafia/index.html',

        runtimeCaching: [
          {
            urlPattern: /^http:\/\/localhost:3000\/api\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'mparafia-api-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7 // Trzymaj je przez 7 dni
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          // NOWA REGUŁA DLA WGRANYCH ZDJĘĆ:
          {
            urlPattern: /^http:\/\/localhost:3000\/uploads\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'mparafia-images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // Trzymaj je przez 30 dni
              },
              cacheableResponse: { statuses: [0, 200] }
            }
          }
        ]
      },
      devOptions: {
        enabled: true,
        type: 'module'
      }
    })
  ]
})