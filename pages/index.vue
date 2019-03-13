<template lang="pug">
  div
    div(v-for='post in posts', :key='post.fields.title')
      nuxt-link(:to='{path:`./posts/${post.fields.date}`}')
        div {{post.fields.title}}
        div {{post.fields.date}}
        div {{post.sys.id}}
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'

  export default {

    async asyncData({env}){
      const content = await createClient().getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
      })

      console.dir(content.items[0].sys)
      return { posts: content.items}

    }
  }
</script>