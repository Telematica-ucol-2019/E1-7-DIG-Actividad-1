import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  srcDir: 'src',
  target: 'server',
  buildModules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
    },
    display: 'auto',
  },
  colorMode: {
    classSuffix: '',
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en', style: 'font-family: Poppins' },
      title: /*process.env.npm_package_name ||*/ 'Brand',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'Brand', content: 'Brand' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  router: {
    base: '/E1-7-DIG-Actividad-1/',
  },
});
