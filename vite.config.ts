import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

const __dirname = path.resolve();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TestTask-login',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
});
