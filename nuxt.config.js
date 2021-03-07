export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'asdf',
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
      { rel: "stylesheet", type: "text/css", href: "/css/bootstrap.min.css" }
    ],
    script: [
      { src: '/js/bootstrap.bundle.min.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/vue-datepicker.js', ssr: false},
    {src: '~/plugins/toasted.js', ssr: false},
    {src: '~/plugins/sweetalert.js', ssr: false},
    {src: '~/plugins/vue-notification.js', ssr: false},
    {src: '~/plugins/vue-multiselect.js', ssr: false},
    {src: '~/plugins/v-money.js', ssr: false},
    {src: '~/plugins/vue-slider-component.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
