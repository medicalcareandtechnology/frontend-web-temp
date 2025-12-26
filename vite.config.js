import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Environment variables with VITE_ prefix are automatically exposed to client
  // No additional configuration needed for env vars

  // Optional: Proxy configuration for local development
  // Uncomment if you want to proxy API requests to avoid CORS issues
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3001',
  //       changeOrigin: true,
  //     }
  //   }
  // }
})
