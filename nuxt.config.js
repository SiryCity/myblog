const config = (process.env.NODE_ENV === 'development')
? require('./.contentful.json')
: process.env
//import {createClient} from './plugins/contentful.js'
const contentful = require('contentful')

module.exports = {
  css: ['assets/main.css'],
  
  generate: {
    async routes(){
      const contents = await contentful.createClient({
        space: config.CTF_SPACE_ID,
        accessToken: config.CTF_CDA_ACCESS_TOKEN
      }).getEntries({
        'content_type': config.CTF_BLOG_POST_TYPE_ID,
      })

      const posts = contents.items.map(entry => 
        ({
          route: `/posts/${entry.fields.date}`,
          payload: entry
        })
      )
      
      const tags = contents.items.map(entry => 
        ({
          route: `/tags/${entry.fields.tags[0]}`,
          payload: entry
        })
      )

      return [... posts, ... tags]
    }
  },
  css: [
    { src: '~/node_modules/highlight.js/styles/hopscotch.css', lang: 'css' }
  ],
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/dotenv'
  ],
  markdownit: {
    injected: true,
    use: [
      'markdown-it-highlightjs'
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | JavaScriptに関するお知らせ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: 'JavaScript、Python等の技術ブログ。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'JavaScriptに関するお知らせ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://notice-js.com' },
      { hid: 'og:title', property: 'og:title', content: 'JavaScriptに関するお知らせ' },
      { hid: 'og:description', property: 'og:description', content: 'JavaScript、Python等の技術ブログ。' },
      { hid: 'og:image', property: 'og:image', content: 'https://notice-js.com/ogp-image.png'},

      { name: "robots", content: "noindex" },
      { name: "robots", content: "nofollow" },
      { name: "robots", content: "noachieve" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  mode: 'universal',
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID,
    FORMS_API: process.env.FORMS_API
  }
}

