import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import * as path from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname,'resources/js') },
            { find: '~~', replacement: path.resolve(__dirname,'modules') },
            { find: 'ziggy', replacement: path.resolve(__dirname,'vendor/tightenco/ziggy/src/js/route.js') },
        ],
    },
    ssr: {
        noExternal: [
            '@inertiajs/server',
            'laravel-vite-plugin',
        ],
    },
});
