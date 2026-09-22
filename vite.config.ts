import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves project sites from /<repository>/. Netlify serves from /.
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'Me'
const base = process.env.GITHUB_PAGES === 'true' ? `/${repositoryName}/` : '/'

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
