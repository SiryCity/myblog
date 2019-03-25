<template lang="pug">
  article-wrapper
    section-wrapper
      tag-box(:date='getNearbyPosts().curr.date' :tags='getNearbyPosts().curr.tags')
      h1.posts__title {{getNearbyPosts().curr.title}}
      s-n-s-box
      div.posts__body(v-html='$md.render(getNearbyPosts().curr.body)')
      div.posts__prev-home-next
        nuxt-link(
          v-if='getNearbyPosts().prev'
          :to='{name:"posts-date",params:{date: getNearbyPosts().prev.date}}'
        ) {{`< ${getNearbyPosts().prev.title}`}}
        div(v-else)
        nuxt-link(to='../') home
        nuxt-link(
          v-if='getNearbyPosts().next'
          :to='{name:"posts-date", params:{date: getNearbyPosts().next.date}}'
        ) {{`${getNearbyPosts().next.title} >`}}
        div(v-else)
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import ArticleWrapper from '~/components/ArticleWrapper.vue'
  import SectionWrapper from '~/components/SectionWrapper.vue'
  import TagBox from '~/components/TagBox.vue'
  import SNSBox from '~/components/SNSBox.vue'

  export default {
    head(){ 
      return {
        title: this.getNearbyPosts().curr.title,
      }
    },
    components:{
      ArticleWrapper,
      SectionWrapper,
      TagBox,
      SNSBox
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
  line-height 1.8
  >>> a
    color #09c
    text-decoration none
    &:hover
      text-decoration underline
  >>> h2
    font-size 20px
    margin-top 30px
  >>> pre
    margin 30px 0

.posts__prev-home-next
  display flex
  width 100%
  height 20px
  display flex
  justify-content space-between
  margin-top 15px
  a
    display block
    color #18375A
    text-decoration none
  div
    width 30px


</style>
