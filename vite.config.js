import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Permite que o Vite escute em todas as interfaces.
    port: 5173,  // Define a porta que será exposta pelo Docker.
    watch: {
      usePolling: true,  // Necessário para ambientes Docker para garantir que as mudanças sejam capturadas.
    }
  }
});

