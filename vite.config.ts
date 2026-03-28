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
      workbox: {
        globPatterns: ['**/*.{html,js,css,json,png,ico,svg}'],
        navigateFallback: 'index.html'
      },
      devOptions: {
        enabled: true
      }
    })
  ]
})