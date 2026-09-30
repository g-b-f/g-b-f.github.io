import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/blog': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        // Docusaurus 404s on /blog without a trailing slash; add one.
        rewrite: (path) => path.replace(/^\/blog$/, '/blog/'),
      },
    },
  },
  // base: '/g-b-f.github.io/'
})
