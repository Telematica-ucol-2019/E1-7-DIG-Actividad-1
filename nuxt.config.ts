import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    srcDir: 'src',
    target: 'static',
    app: {
        head: {
            title: process.env.npm_package_name || 'Brand',
            meta: [
                { name: 'description', content: 'Brand' },
                { charset: 'utf-8' },
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: './src/assets/images/logo.png' }
            ]
        },
    },
    // router: {
    //     base: '/<repository-name>/'
    // }
});
