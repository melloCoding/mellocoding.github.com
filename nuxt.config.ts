// https://nuxt.com/docs/api/configuration/nuxt-confi
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head:{
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Jeffrey Mello',
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css']
})
