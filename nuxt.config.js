// export default {
//   // Target: https://go.nuxtjs.dev/config-target
//   target: 'static',

//   env: {
//     apiUrl: process.env.API_URL,
//   },

//   // Global page headers: https://go.nuxtjs.dev/config-head
//   head: {
//     title: 'Unexplored Fields',
//     htmlAttrs: {
//       lang: 'en',
//     },
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: '' },
//       { name: 'format-detection', content: 'telephone=no' },
//     ],
//     link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
//   },

//   // Global CSS: https://go.nuxtjs.dev/config-css
//   css: [
//     '@/assets/css/tailwind.css',
//     '@/assets/css/global.css',
//     '@/assets/css/darkmode.css',
//     '@/assets/css/type.css'

//   ],

//   publicRuntimeConfig: {
//     assetUrl: process.env.DIRECTUS_URL
//   },

//   vue: {
//     config: {
//       productionTip: false,
//       devtools: true
//     }
//   },

//   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
//   plugins: [
//     '~/plugins/asset-url.js'

//   ],

//   // Auto import components: https://go.nuxtjs.dev/config-components
//   components: true,

//   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
//   buildModules: [
//     '@nuxtjs/tailwindcss',
//     '@nuxtjs/google-fonts',
//     '@nuxtjs/color-mode',

//   ],

//   googleFonts: {
//     families: {
//       'Coromont+Garamond': true
//     }
//   },

//   // Modules: https://go.nuxtjs.dev/config-modules
//   modules: [
//     [
//       '~/modules/extractor',
//       {
//         path: '/_images', // dir where downloaded images will be stored

//         baseUrl: process.env.API_URL
//       },
//       '~/modules/directus'

//     ]
//     // 
//   ],
//   markdownit: {
//     runtime: true, // Support `$md()`
//     preset: 'default',
//     linkify: true,
//     breaks: true,
//     use: ['markdown-it-div', 'markdown-it-attrs']
//   },
//   directus: {
//     url: process.env.DIRECTUS_URL,
//     auth: {
//       email: process.env.DIRECTUS_EMAIL,
//       password: process.env.DIRECTUS_PASSWORD,
//       // token: process.env.DIRECTUS_STATIC_TOKEN,
//     },
//   },



//   // Build Configuration: https://go.nuxtjs.dev/config-build
//   build: {},
// }
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Outlined' }
    ],

  },

  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/global.css',
    '@/assets/css/darkmode.css',
    '@/assets/css/type.css'


  ],

  buildModules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
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
    '~/modules/directus',
    //       '~/modules/extractor',
//       {
//         path: '/_images', // dir where downloaded images will be stored

//         baseUrl: process.env.API_URL
//       },
  ],

  directus: {
    url: process.env.DIRECTUS_URL,
    auth: {
      email: process.env.DIRECTUS_EMAIL,
      password: process.env.DIRECTUS_PASSWORD,
      // token: process.env.DIRECTUS_STATIC_TOKEN,
    },
  },
}