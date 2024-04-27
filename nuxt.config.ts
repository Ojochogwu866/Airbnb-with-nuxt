// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from 'path';
export default defineNuxtConfig({

    modules: [
    '@pinia/nuxt',
    '@element-plus/nuxt',
    ['@nuxtjs/google-fonts', {
        families: {
          Roboto: true,
          Inter: [400, 700],
          'Josefin+Sans': true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 200, 300, 400, 500, 600],
            ital: [100]
          },
          'Crimson Pro': {
            wght: '200..900',
            ital: '200..700',
          }
        }
    }],
  ],
  devtools: { enabled: true },
   css: ['@/assets/css/main.css'],
   postcss: {
   plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
