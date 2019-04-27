<template lang="pug">
  article-wrapper
    //- SNSリンクや広告のエリア
    bread-crumbs

    //- 左側
    section-area(:width='$store.state.device.isSP ? "100vw" : "calc(100vw - 80px - 15px * 3 - 330px)"')
      //- NEWS
      small-posts(:posts='posts' heading='NEWS' kana='ニュース' prefix='ブログ「' postfix='」 が投稿されました。')
      
      adsbygoogle
    //- 右側
    section-area(:width='$store.state.device.isSP ? "100vw" : "330px"')
      //- THEME
      section-wrapper(heading='THEME' kana='記事一覧')
        nuxt-link.theme(:to='{name:"tags-tagname", params:{tagname: "JavaScript"}}')
          img(src='~/assets/js.svg')
          div JavaScript
        nuxt-link.theme(:to='{name:"tags-tagname", params:{tagname: "CSS"}}')
          img(src='~/assets/css.svg')
          div CSS
        nuxt-link.theme(:to='{name:"tags-tagname", params:{tagname: "Python"}}')
          img(src='~/assets/python.svg')
          div Python
        nuxt-link.theme(:to='{name:"tags-tagname", params:{tagname: "Others"}}')
          img(src='~/assets/icon.svg')
          div Others
      
      //- AUTHOR
      section-wrapper(heading='AUTHOR' kana='作者情報')
        a.author(href='https://rm-js.com')
          div MIZUTANI Ryuto
      //- BLOG
      large-posts(:posts='posts' heading='BLOG' kana='ブログ')
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

.theme
  width 143px
  height 143px
  border 1px solid #cccccc
  box-sizing border-box
  display flex
  flex-direction column
  align-items center
  justify-content space-between
  text-decoration none
  margin 7.5px 0
  img
    width 110px
    height 110px
    margin-top 4px
  div
    width 100%
    height 23px
    line-height 23px
    color white
    font-size 14px
    background-color #0473C2
    text-align center

.author
  width 143px
  height 50px
  line-height 50px
  color white
  background linear-gradient(#0073c2, #02609F)
  text-decoration none
  text-align center
  font-size 15px
</style>
