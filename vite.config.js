import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 base: '/global-education',
 server: {
    host: '0.0.0.0',   // 👈 IMPORTANT
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 443
    }
  }
})

