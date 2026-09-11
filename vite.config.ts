import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves from a subpath.
// Detect at build time via env var, otherwise use '/' for Netlify.
const base = process.env.GITHUB_PAGES === 'true'
  ? '/My-Official-Website/'
  : '/'

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
