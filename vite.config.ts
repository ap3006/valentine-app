
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update base if deploying to GitHub Pages at /<repo> path, e.g. base: '/valentines-app/'
export default defineConfig({
  plugins: [react()],
})
