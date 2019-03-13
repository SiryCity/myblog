<template lang="pug">
  div {{filterPosts()}}
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'

  export default {

    async asyncData({env}){
      const contents = await createClient().getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
      })

      return {posts: contents.items}

    },
    methods:{
      filterPosts(){
        console.dir(this.posts)
        const post = this.posts.reduce((pre, cur) =>
          pre
          || (cur.fields.date === this.$route.params.date
              ? cur
              : pre
            ) 
        ,null)
        return post
      }
    }

  }
</script>
