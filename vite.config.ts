import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set base path for GitHub Pages (change 'Portfolio' to your repo name)
  base: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
