  import bodyParser from 'body-parser';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  head: {
    title: 'Japi',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      {
        'http-equiv': 'Content-Security-Policy',
        content:
          "default-src *; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src  'self' 'unsafe-inline' *; img-src 'self' data: *",
      },
      {
        name: 'description',
        content:
          'Plataforma digital para encontrar la mejor reparadora de crédito en México.',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Japi',
      },
      { hid: 'og:image', name: 'og:image', content: '/icons/512.png' },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Plataforma digital para encontrar la mejor reparadora de crédito en México.',
      },
      {
        name: 'facebook-domain-verification',
        content: 'oa2263sc5gqzauevz7klallm981lxs',
      },
      {
        name: 'facebook-domain-verification',
        content: '4ennpzumm9h152znxismnluac7dyc1',
      },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Japi' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'Japi' },
      { name: 'theme-color', content: '#4DBA87' },
      { name: 'msapplication-TileImage', content: '/icons/256.png' },
      { name: 'msapplication-TileColor', content: '#000000' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src:
          'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9717001873749827',
        async: true,
        crossorigin: 'anonymous',
      },
      {
        hid: 'twitter-tracking',
        innerHTML: `!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
        a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
        twq('config','oqt8k');`,
        type: 'text/javascript',
        charset: 'utf-8',
        body: true,
      }
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/tachyons.min.css'
  ],

  serverMiddleware: [
    { path: '/api/element', handler: bodyParser.json() },
    { path: '/api/element', handler: '~/api/element.js' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-money.js', mode: 'client' },
    { src: '~/plugins/vue-mask.js', mode: 'client' },
    { src: '~/plugins/vue-slick.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-sweetalert2',
    'nuxt-facebook-pixel-module',
    '@nuxtjs/axios',
    ['nuxt-tiktok-pixel-module', {
      /* module options */
      pixel: 'CUF8B83C77U7V3T8MD8G',
      disabled: false
    }],
  ],

  axios: {
    // proxy: true
    headers: {
      common: {
        Accept: 'application/json, text/plain, */*',
        'access-control-allow-origin': '*',
      },
    },
  },

  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '900659661337008',
    autoPageView: true,
    disabled: false,
  },

  // googleAnalytics: {
  //   id: 'G-ND9H4MZR5M',
  // },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  bootstrapVue: {
    components: [
      'BIcon',
      'BIconArrowBarRight',
      'BIconLightning',
      'BIconPatchCheck',
      'BIconPersonCheck',
      'BIconCashStack',
      'BIconCardChecklist',
      'BIconFileEarmarkBarGraph',
      'BIconFileEarmarkArrowUp',
      'BIconFileEarmarkPerson',
      'BIconPencil',
      'BIconFilterCircle',
      'BIconFacebook',
    ],
    componentPlugins: [
      'LayoutPlugin',
      'ButtonPlugin',
      'NavbarPlugin',
      'OverlayPlugin',
      'NavPlugin',
      'FormPlugin',
      'FormGroupPlugin',
      'FormInputPlugin',
      'ModalPlugin',
      'CardPlugin',
      'SpinnerPlugin',
      'SidebarPlugin',
      'LinkPlugin',
      'CollapsePlugin',
      'FormSelectPlugin',
      'FormCheckboxPlugin',
      'BadgePlugin',
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: { compact: true },
  },
}
