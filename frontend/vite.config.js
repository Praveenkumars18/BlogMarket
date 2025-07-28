import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Enable SPA fallback in dev
    historyApiFallback: true
  }
  // For production, configure your static server (e.g., Netlify, Vercel, nginx) to serve index.html for all routes
})
