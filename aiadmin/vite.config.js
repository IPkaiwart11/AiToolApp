import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
export default defineConfig({
  plugins: [react()],
  server: {
    fsServe: {
      strictMime: false,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  build: {
    target: 'modules',
    outDir: 'dist',
  },
});
