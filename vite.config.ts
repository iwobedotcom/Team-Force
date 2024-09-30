import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 75 },
      webp: { quality: 80 },
      avif: { quality: 70 },
      svg: {
        plugins: [{ name: 'removeViewBox' }, { name: 'sortAttrs' }]
      }
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
        // sitemap: './sitemap.xml'
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
