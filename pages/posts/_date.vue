<template lang="pug">
  div {{getThisPost()}}
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
      getThisPost(){
        return this.posts.reduce((... post) =>
          post[0]
          || post[1].date !== this.$route.params.date
            ? post[0]
            : post[1]
        , null)
      }
    }

  }
</script>
