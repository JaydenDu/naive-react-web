import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import sass from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const viteEnv = loadEnv(mode, process.cwd());
    const { VITE_PUBLIC_PATH, VITE_PROXY_TARGET } = viteEnv;

    return {
        base: VITE_PUBLIC_PATH,
        plugins: [react(),sass()],
        resolve: {
            alias: {
                '@': path.resolve(process.cwd(), 'src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./src/styles/standard.scss";',
                },
            },
        },
        server: {
            host: true,
            port: 8001,
            open: true,
            proxy: {
                '/api': {
                    target: VITE_PROXY_TARGET,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(new RegExp('^/'), ''),
                    secure: false,
                },
            },
        },
    };
});
