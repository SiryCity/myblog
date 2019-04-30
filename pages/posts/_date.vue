<template lang="pug">
  article-wrapper
    section-wrapper
      tag-box(:date='getNearbyPosts().curr.date' :tags='getNearbyPosts().curr.tags')
      h1.posts__title {{getNearbyPosts().curr.title}}
      s-n-s-box
      adsbygoogle(:ad-slot='"8176575284"')
      div.posts__body(v-html='$md.render(getNearbyPosts().curr.body)')
      adsbygoogle(:ad-slot='"8176575284"')
      div.posts__prev-home-next
        nuxt-link.posts__link--toprev(
          v-if='getNearbyPosts().prev'
          :to='{name:"posts-date",params:{date: getNearbyPosts().prev.date}}'
        ) {{getNearbyPosts().prev.title.length < 10 ? `← ${getNearbyPosts().prev.title}` : `← ${getNearbyPosts().prev.title.substr(0,8)}...`}}
        nuxt-link.posts__link--tohome(:to='{name: "index"}') home
        nuxt-link.posts__link--tonext(
          v-if='getNearbyPosts().next'
          :to='{name:"posts-date", params:{date: getNearbyPosts().next.date}}'
        ) {{getNearbyPosts().next.title.length < 10 ? `${getNearbyPosts().next.title} →` : `${getNearbyPosts().next.title.substr(0,8)}... →`}}
        
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
        type: 'article',
        url: this.currentUrl,
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
      return this.posts.reduce((prev, curr, i, posts) =>
        prev
        || curr.date !== this.$route.params.date
          ? prev
          : {
            next: posts[i - 1] || null,
            curr,
            prev: posts[i + 1] || null
          }
      , null)
    }
  },
  data: () =>
    ({
      currentUrl: null
    }),
  mounted(){
    this.currentUrl = location.href
  }

}
</script>


<style lang="stylus" scoped>
.posts__title
  width 100%
  font-size 20px
  padding 15px 0
  margin-bottom 15px
  color #18375A
  border-bottom 1px solid #ccc

.posts__body
  width 100%
  color #555
  line-height 1.8
  min-height calc(var(--static100vh, 100vh) - 200px)
  >>> a
    color #09c
    text-decoration none
    &:hover
      text-decoration underline
  >>> h2
    font-size 22px
    margin 50px 0 20px
  >>> h3
    font-size 18px
    margin 20px 0 10px
  >>> pre
    margin 20px 0 30px
    code
      overflow scroll
  >>> ol
    margin 50px 0
  

.posts__prev-home-next
  width 100%
  height 60px
  display flex
  justify-content space-between
  margin-top 30px
  border-top 1px solid #ccc
  border-bottom 1px solid #ccc
  padding 15px 0
  font-size 14px
  filter blur(.3px)
  position relative
  a
    height 24px
    line-height 20px
    display block
    color white
    background-color #0099CC
    text-decoration none
    padding 2px 5px
    border-radius 3px
    position absolute
    top 0
    bottom 0
    margin auto 
    &:hover
      background-color #0374C2
  .posts__link--toprev
    left 0
    width 160px
  .posts__link--tohome
    left 0
    right 0
    width 64px
    text-align center
  .posts__link--tonext
    right 0
    width 160px
    text-align right


</style>
