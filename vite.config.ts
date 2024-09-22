import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Ou '0.0.0.0' para aceitar conexões de qualquer IP
    port: 5174, // Certifique-se de que essa é a porta correta
  },
})
