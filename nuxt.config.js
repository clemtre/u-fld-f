export default {
  env: {
    apiUrl: process.env.API_URL,
    baseUrl: process.env.BASE_URL,
    // NODE_ENV: process.env.NODE_ENV
  },
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
    baseUrl: process.env.BASE_URL
  },
  privateRuntimeConfig: {
    apiUrl: process.env.API_URL,
    baseUrl: process.env.BASE_URL
  },

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
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'stylesheet', src: '@/node_modules/normalize.css/normalize.css' }
      
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

  image: {
    domains: [process.env.DOMAIN, `${process.env.DOMAIN}*`],
  },

  components: true,


  plugins: [
    '~/plugins/asset-url.js',
    '~/plugins/stripHTML.js'
  ],

}