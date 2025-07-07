import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), 'CONFIG_');

  return {
    plugins: [react()],
    resolve: {
      base: '/',
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    envPrefix: 'APP_',
    server: {
      port: parseInt(env.CONFIG_SERVER_PORT) || 2001,
      open: env.CONFIG_SERVER_OPEN || 'http://gymaxis.online/',
      strictPort: false,
      host: true, // Fix: Replaced allowedHosts with host
      allowedHosts:true
    },
  };
});