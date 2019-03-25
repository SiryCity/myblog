<template lang="pug">
  article-wrapper
    small-posts(:posts='getPostsIncludingTag()' :heading='this.$route.params.tagname')
      nuxt-link(:to='{name: "index"}') home
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import ArticleWrapper from '~/components/ArticleWrapper.vue'
  import SmallPosts from '~/components/SmallPosts.vue'

  export default {
    head(){ 
      return {
        title: `タグ: ${this.$route.params.tagname}`,
      }
    },
    components:{
      ArticleWrapper,
      SmallPosts,
    },
    async asyncData({env, payload}){
      if(payload) return payload
      const contents = await createClient().getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.date',
      })
      return {posts: contents.items.map(item => item.fields)}
    },

    methods:{
      getPostsIncludingTag(){
        return this.posts.filter(post => post.tags.includes(this.$route.params.tagname))
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
