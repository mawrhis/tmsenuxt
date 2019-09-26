import pkg from './package'

function routes(numberOfPosts) {
 var array = []
 var posts = numberOfPosts
 var i = 0
 while (i < posts) {
  let string = '/posts/post/' + i
  i++
  array.push(string)
 }
 return array
}

export default {
  router: {
    extendRoutes (routes) {
      routes.push({ path: '/', redirect: '/posts/post' })
    }
  },

  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  generate: {
    routes: routes(72)
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

      }
  }
}
