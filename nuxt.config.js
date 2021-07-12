
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - alphaclean',
    title: 'alphaclean',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'}
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' },
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js'}
    ]
  },

  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      siteKey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' // for example
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css',
    '~/assets/css/services.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/recaptcha',
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'info@alphaclean.nz',
      },
      smtp: {
        host: 'cp-wc01.iad01.ds.network',
        port: 465,
        auth: {
          user: 'info@alphaclean.nz',
          pass: 'Dia12345!!'
        },
      },
    }],
  ],

  recaptcha: {
    hideBadge: true,
    siteKey: process.env.RECAPTCHA_SITE_KEY, // Better would be from 'process.env.API_KEY' and with '.env' file
    version: 2, // Or 3
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
