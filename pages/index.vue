<template>
  <div>
    <div v-for="post in posts" :key="post.fields.title">
      {{ post.fields.title }}
    </div>
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'

  export default {

    async asyncData({env}){
      const content = await createClient().getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
      })

      return { posts: content.items}

    }
  }
</script>