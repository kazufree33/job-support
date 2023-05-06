import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/kazufree33/job-support.git/',
  plugins: [react()],
});
