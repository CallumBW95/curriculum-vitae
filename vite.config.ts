import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sassGlobImports from 'vite-plugin-sass-glob-import';
import path from 'path';

const alias = {
    '~': path.resolve(__dirname, 'node_modules')
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sassGlobImports(),
  ],
  resolve: {
    alias
  },
  css: {
    preprocessorOptions: {
        scss: {
          alias
        }
      }
    }
})
