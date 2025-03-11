import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/website-rental-cars/',
  plugins: [react()],
  server: {
    port: 3000,
  }
})
