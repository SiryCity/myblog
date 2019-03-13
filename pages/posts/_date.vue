<template lang="pug">
  div
    h1 {{getPosts().curr.title}}
    div {{getPosts().curr.date}}
    div(v-for='tag in getPosts().curr.tags')
      div {{tag}}
    div {{getPosts().curr.body}}
    nuxt-link(v-if='getPosts().prev' :to='{name:"posts-date", params:{date: getPosts().prev.date}}')
      div {{getPosts().prev.title}}
    nuxt-link(v-if='getPosts().next' :to='{name:"posts-date", params:{date: getPosts().next.date}}')
      div {{getPosts().next.title}}
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
      getPosts(){
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
