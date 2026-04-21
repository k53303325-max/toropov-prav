import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Копирует index.html → 404.html: GitHub Pages и часть хостингов отдают SPA по 404.html */
function spa404HtmlPlugin() {
  return {
    name: 'spa-404-html',
    apply: 'build' as const,
    closeBundle() {
      const dist = resolve(process.cwd(), 'dist')
      const indexHtml = resolve(dist, 'index.html')
      if (existsSync(indexHtml)) {
        copyFileSync(indexHtml, resolve(dist, '404.html'))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), spa404HtmlPlugin()],
})
