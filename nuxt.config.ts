// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', 'nuxt-icon', '@nuxtjs/color-mode'],
  css: ['~/assets/css/main.css', '~/assets/css/transition.css'],
  colorMode: {
    classSuffix: ''
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
