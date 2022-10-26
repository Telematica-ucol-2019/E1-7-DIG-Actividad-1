import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'],
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
    },
    display: 'auto',
  },
  srcDir: 'src',
  target: 'static',
  app: {
    head: {
      title: /*process.env.npm_package_name ||*/ 'Brand',
      meta: [{ name: 'description', content: 'Brand' }, { charset: 'utf-8' }],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
  router: {
    base: '/E1-7-DIG-Actividad-1/',
  },
});
