<template lang="pug">
  article-wrapper
    section-wrapper
      tag-box(:date='getNearbyPosts().curr.date' :tags='getNearbyPosts().curr.tags')
      h1.posts__title {{getNearbyPosts().curr.title}}
      div.posts__body(v-html='$md.render(getNearbyPosts().curr.body)')
      nuxt-link(v-if='getNearbyPosts().prev' :to='{name:"posts-date", params:{date: getNearbyPosts().prev.date}}')
        div {{getNearbyPosts().prev.posts__title}}
      nuxt-link(v-if='getNearbyPosts().next' :to='{name:"posts-date", params:{date: getNearbyPosts().next.date}}')
        div {{getNearbyPosts().next.posts__title}}
      nuxt-link(to='../') home
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import ArticleWrapper from '~/components/ArticleWrapper.vue'
  import SectionWrapper from '~/components/SectionWrapper.vue'
  import TagBox from '~/components/TagBox.vue'

  export default {
    components:{
      ArticleWrapper,
      SectionWrapper,
      TagBox
    },
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

<style lang="stylus" scoped>
.posts__title
  font-size 20px
  padding 15px 0
  margin-bottom 15px
  color #18375A
  border-bottom 1px solid #ccc

.posts__body
  color #555

</style>
