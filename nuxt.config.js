export default {
  target: 'static',

  head: {
    title: 'Unexplored Fields',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
    ],
    link: [
      // exemple d'import
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined' }
      // import IBM mono & Libre Baskerville

    ],

  },

  css: [
    '@/assets/css/variables.css',

    '@/assets/css/global.css',
    '@/assets/css/darkmode.css',
    '@/assets/css/type.css'


  ],

  buildModules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',

  ],

  components: true,

  publicRuntimeConfig: {
    assetUrl: process.env.DIRECTUS_URL
  },

  plugins: [
    '~/plugins/asset-url.js',
    '~/plugins/stripHTML.js'
  ],

  modules: [
    '@nuxt/image',
  ],

}