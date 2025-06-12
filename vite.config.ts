import { defineConfig } from 'vite';

// use SWC (faster, but unstable on exotic platforms like Android)
// import react from '@vitejs/plugin-react-swc';

// use Babel (slower, but rock-solid)
import react from '@vitejs/plugin-react';

import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    exclude: ['@electric-sql/pglite'],
  },
})
