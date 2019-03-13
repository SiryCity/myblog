<template lang="pug">
  div
    div(v-for='post in posts', :key='post.title')
      nuxt-link(:to='{name:"posts-date", params:{date: post.date}}')
        div {{post.title}}
        div {{post.date}}
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
    }
  }
</script>