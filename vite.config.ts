import { defineConfig } from 'vite';

// use SWC (faster, but possibly unstable on exotic platforms like Termux)
import react from '@vitejs/plugin-react-swc';

// use Babel (slower, but more widely compatible)
// import react from '@vitejs/plugin-react';

import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/one-join/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    exclude: ['@electric-sql/pglite'],
  },
})
