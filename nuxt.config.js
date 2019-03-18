const config = require('./.contentful.json')
import {createClient} from './plugins/contentful.js'
const contentful = require('contentful')

module.exports = {
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
    '@nuxtjs/markdownit'
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
    title: 'JavaScriptに関するお知らせ',
    titleTemplate: '%s | JavaScriptに関するお知らせ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
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
  mode: 'spa',
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
  }
}

