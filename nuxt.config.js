require('dotenv').config()

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    meta: [ // Each object in this array is its own meta tag
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    ['@nuxtjs/axios', {
      baseURL: 'http://localhost:8000',
      browserBaseURL: 'http://localhost:8000',

    }],
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
  ],
  proxy: {
    '/laravel': {
      target: process.env.BASE_URL || "http://localhost:8000",
      pathRewrite: {'^/laravel': '/'}
    }
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.BASE_URL || "http://localhost:8000",
      },
    },
    localStorage: false
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.BASE_URL || "http://localhost:8000",
    credentials: true
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, {isDev, isClient}) {
      config.module.rules.forEach(rule => {
        if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          // add a second loader when loading images
          rule.use.push({
            loader: 'image-webpack-loader',
            options: {
              svgo: {
                plugins: [
                  // use these settings for internet explorer for proper scalable SVGs
                  // https://css-tricks.com/scale-svg/
                  {removeViewBox: false},
                  {removeDimensions: true}
                ]
              }
            }
          })
        }
      })
    }
  }
}
