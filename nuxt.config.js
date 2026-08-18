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
      path: '/api',
      handler: '~/server/api.js',
    },
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
      {
        name: 'google-site-verification',
        content: 'pscZGP1uLSEzcn__-5yUDjZ_7w_aS4DVZUd510uIzpY',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/ico_pizza.ico' },
      // Self-hosted (was cdn.jsdelivr.net / fonts.googleapis.com): avoids the
      // extra DNS/TLS round trips those third-party origins added to the
      // render-blocking critical path.
      { rel: 'stylesheet', href: '/vendor/bootstrap/bootstrap.min.css' },
      // Loaded non-render-blocking: the page already declares font-display:swap,
      // so text just briefly renders in the fallback sans-serif before swapping
      // to Poppins - no layout/visual risk, but removes it from the critical path.
      { rel: 'preload', as: 'style', href: '/vendor/fonts/poppins.css' },
      {
        rel: 'stylesheet',
        href: '/vendor/fonts/poppins.css',
        media: 'print',
        onload: "this.media='all'",
      },
    ],
    noscript: [
      { innerHTML: '<link rel="stylesheet" href="/vendor/fonts/poppins.css">' },
    ],
    script: [
      // Site-wide Person/WebSite structured data: tells search engines which
      // real-world entity this site belongs to (AI researcher, not the
      // unrelated photographer who shares the same name), via sameAs links
      // to owned profiles.
      {
        hid: 'ld-json-person',
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Person',
              '@id': 'https://francesco-bosso.github.io/#person',
              name: 'Francesco Bosso',
              url: 'https://francesco-bosso.github.io',
              image: 'https://francesco-bosso.github.io/homepage/me.webp',
              jobTitle: 'AI Research Engineer',
              description:
                'AI Research Engineer specializing in machine learning, geospatial AI, sensing, and defence/aerospace technology.',
              sameAs: [
                'https://www.linkedin.com/in/francesco-bosso-614814130/',
                'https://github.com/FBosso',
              ],
              knowsAbout: [
                'Machine Learning',
                'Artificial Intelligence',
                'Geospatial Data Analysis',
                'Reinforcement Learning',
                'Cognitive Radar',
                'Aerospace Engineering',
              ],
            },
            {
              '@type': 'WebSite',
              '@id': 'https://francesco-bosso.github.io/#website',
              url: 'https://francesco-bosso.github.io',
              name: 'Francesco Bosso',
              publisher: { '@id': 'https://francesco-bosso.github.io/#person' },
            },
          ],
        },
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

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
  modules: ['@nuxtjs/axios', '@nuxtjs/sitemap'],

  // Sitemap module configuration: https://github.com/nuxt-community/sitemap-module
  // routes are supplied by generate.routes below (dynamic work IDs from the DB)
  sitemap: {
    hostname: 'https://francesco-bosso.github.io',
    gzip: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL is for server-side calls (asyncData during SSR/generate), which always run on
    // the same machine as the API, so localhost is correct there. browserBaseURL is relative
    // so client-side requests (e.g. SPA navigation) hit whatever origin the browser is
    // actually on instead of hardcoding localhost — otherwise those calls break when the
    // dev server is reached from another device (e.g. testing on a phone over LAN).
    baseURL: 'http://localhost:3000',
    browserBaseURL: '',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      // @nuxt/babel-preset-app hardcodes the client babel target to IE9
      // regardless of the browserslist field above, which forces core-js to
      // polyfill a huge amount of already-native functionality. Overriding
      // the preset's targets with our real (evergreen) browserslist shrinks
      // the vendor bundle substantially.
      presets({ envName }, [preset, opts]) {
        const { browserslist } = require('./package.json')
        return [
          [
            preset,
            {
              ...opts,
              targets:
                envName === 'client'
                  ? { browsers: browserslist }
                  : opts.targets,
            },
          ],
        ]
      },
    },
    extend(config, { isDev, isClient }) {
      // Production client bundle ships a source map so error stack traces
      // stay mappable to original files, but 'nosources-source-map' omits
      // sourcesContent - visitors can't read the original source from
      // devtools, only line/name mappings.
      if (!isDev && isClient) {
        config.devtool = 'nosources-source-map'
      }
    },
  },

  generate: {
    fallback: '404.html',
    dir: 'dist',
    // Explicitly enumerate dynamic /category/:id routes from the DB so
    // generate doesn't rely solely on crawling <NuxtLink>s, and so the
    // sitemap module (which reuses these routes) includes every work page.
    routes: async () => {
      const { Sequelize, DataTypes } = require('sequelize')
      const database = new Sequelize(
        'postgres://postgres:postgres@localhost:5432/mapflap',
        { logging: false }
      )
      const Work = database.define('work', {
        codeWork: { type: DataTypes.INTEGER, primaryKey: true },
        category: DataTypes.INTEGER,
      })
      const works = await Work.findAll({
        attributes: ['codeWork', 'category'],
        raw: true,
      })
      const categoryPaths = {
        1: 'geospatial',
        2: 'artificial-intelligence',
        3: 'just-because',
      }
      await database.close()
      return works
        .filter((work) => categoryPaths[work.category])
        .map((work) => `/${categoryPaths[work.category]}/${work.codeWork}`)
    },
  },
  router: {
    base: '/',
  },
}
