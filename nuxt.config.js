export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    apiUrl: process.env.API_URL,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Unexplored Fields',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/global.css',
    '@/assets/css/darkmode.css',
    '@/assets/css/type.css'

  ],

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-request',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode'

  ],
  graphql: {
    clients: {
      default: {
        endpoint: process.env.API_URL + 'graphql',
      },
    },
  },

  googleFonts: {
    families: {
      'Coromont+Garamond': true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '~/modules/extractor',
      {
        path: '/_images', // dir where downloaded images will be stored

        baseUrl: process.env.API_URL,
      },

    ]
    // 
  ],
  markdownit: {
    runtime: true, // Support `$md()`
    preset: 'default',
    linkify: true,
    breaks: true,
    use: ['markdown-it-div', 'markdown-it-attrs']
  },



  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
