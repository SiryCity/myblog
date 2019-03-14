<template lang="pug">
  div
    h1 {{getNearbyPosts().curr.title}}
    div {{getNearbyPosts().curr.date}}
    div(v-for='tag in getNearbyPosts().curr.tags')
      nuxt-link(:to='{name:"tags-tagname", params:{tagname: tag}}') {{tag}}
    div(v-html='$md.render(getNearbyPosts().curr.body)')
    nuxt-link(v-if='getNearbyPosts().prev' :to='{name:"posts-date", params:{date: getNearbyPosts().prev.date}}')
      div {{getNearbyPosts().prev.title}}
    nuxt-link(v-if='getNearbyPosts().next' :to='{name:"posts-date", params:{date: getNearbyPosts().next.date}}')
      div {{getNearbyPosts().next.title}}
    nuxt-link(to='../') home
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'

  export default {

    async asyncData({env}){
      const contents = await createClient().getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.date',
      })
      return {posts: contents.items.map(item => item.fields)}
    },

    methods:{
      getNearbyPosts(){
        return this.posts.reduce((... post) =>
          post[0]
          || post[1].date !== this.$route.params.date
            ? post[0]
            : {
              next: post[3][post[2] - 1] || null,
              curr: post[1],
              prev: post[3][post[2] + 1] || null
            }
        , null)
      }
    }

  }
</script>
