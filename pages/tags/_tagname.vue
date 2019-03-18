<template lang="pug">
  article-wrapper
    section-wrapper
      div 
        div(v-for='post in getPostsIncludingTag()', :key='post.title')
          nuxt-link(:to='{name:"posts-date", params:{date: post.date}}')
            div {{post.title}}
            div {{post.date}}
        nuxt-link(to='../') home
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import ArticleWrapper from '~/components/ArticleWrapper.vue'
  import SectionWrapper from '~/components/SectionWrapper.vue'

  export default {
    components:{
      ArticleWrapper,
      SectionWrapper
    },
    async asyncData({env}){
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