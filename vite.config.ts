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
      strategies: "injectManifest",
      injectManifest: {
        swSrc: 'public/sw.js',
        swDest: 'dist/sw.js',
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{html,js,css,json,png,ico,svg}'
        ],
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      }
    })
  ]
})
