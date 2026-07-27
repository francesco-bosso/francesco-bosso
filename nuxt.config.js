export default {
  // Middleware for handling api calls 

  // uncomment to run the app on your local network
    /* server: {
      host: '0' // default: localhost
    }, */
  
  ssr: true, 
  target: 'static',

  serverMiddleware: [
    {
      path: "/api",
      handler: "~/server/api.js"
    }
  ],
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '3A85A6' },
      /* { hid: 'description', name: 'description', content: '' }, */
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: 'pscZGP1uLSEzcn__-5yUDjZ_7w_aS4DVZUd510uIzpY'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/ico_pizza.ico' },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;900&display=swap" }
    ],
    script: [
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    'nuxt-compress',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:3000'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    fallback: '404.html',
    dir: 'dist',
  },
  router: {
    base: '/'
  }
}
