<template lang="pug">
  article-wrapper
    bread-crumbs
    section-area(:width='$store.state.device.isSP ? "100vw" : "calc(1020px - 15px * 3 - 330px)"')
      small-posts(:posts='posts' heading='NEWS' prefix='ブログ「' postfix='」 が投稿されました。')
    section-area(:width='$store.state.device.isSP ? "100vw" : "330px"')
      section-wrapper(heading='Author')
        a.author(href='https://rm-js.com')
          img(src='~/assets/icon.svg')
          div MIZUTANI Ryuto
      large-posts(:posts='posts' heading='BLOG')
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import BreadCrumbs from '~/components/BreadCrumbs.vue'
  import ArticleWrapper from '~/components/ArticleWrapper.vue'
  import SectionWrapper from '~/components/SectionWrapper.vue'
  import SectionArea from '~/components/SectionArea.vue'
  
  import SmallPosts from '~/components/SmallPosts.vue'
  import LargePosts from '~/components/LargePosts.vue'


  export default {
    head: () =>
      ({
        title: 'JavaScriptに関するお知らせ',
        titleTemplate: null,
      }),
    components:{
      BreadCrumbs,
      ArticleWrapper,
      SectionWrapper,
      SectionArea,
      SmallPosts,
      LargePosts,
    },
    async asyncData({env, payload}){
      if(payload) return payload
      const contents = await createClient().getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.date',
      })
      return {posts: contents.items.map(item => item.fields)}
    }
  }
</script>

<style lang="stylus" scoped>

.author
  width 143px
  height 143px
  border 1px solid #cccccc
  box-sizing border-box
  display flex
  flex-direction column
  align-items center
  justify-content space-between
  text-decoration none
  img
    width 110px
    height 110px
    margin-top 4px
  div
    width 100%
    height 23px
    line-height 23px
    color white
    background-color #0473C2
    text-align center

</style>
