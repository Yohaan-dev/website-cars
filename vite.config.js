import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/yohaan-dev.github.io/website-rental-cars/',
  plugins: [react()],
  server: {
    port: 3000,
  }
})
