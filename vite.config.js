import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: './', // ✅ This line fixes layout issues on Vercel
  plugins: [tailwindcss(), react()],
});
