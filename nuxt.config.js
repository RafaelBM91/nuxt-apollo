module.exports = {
  head: {
    title: 'Nuxt & Apollo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#00D1B2' },

  // css: [
  //   'bulma/css/bulma.css',
  //   'font-awesome/css/font-awesome.css'
  // ],

  build: {
    extractCSS: true,
    vendor: ['vue-apollo', 'apollo-client'],
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~plugins/apollo.js', injectAs: 'apolloProvider' }
  ]
}
