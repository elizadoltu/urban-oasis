import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api/articles' : {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/users/, '')
      },
      '/api/users' : {
        target: 'http://localhost:4001',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/users/, '')
      },
      '/api/newsletter' : {
        target: 'http://localhost:4002',
        changeOrigin: true,
        secure:false,
        rewrite: (path) => path.replace(/^\/api\/newsletter/, '')
      },
      '/api/chatgpt' : {
        target: 'http://localhost:4003',
        changeOrigin: true,
        secure: false, 
        rewrite: (path) => path.replace(/^\/api\/chatgpt/, '')
      },
      '/api/email': {
        target: 'http://localhost:4004',
        changeOrigin: true,
        secure: false, 
        rewrite: (path) => path.replace(/^\/api\/email/, '')
      },
    },
  },
});
