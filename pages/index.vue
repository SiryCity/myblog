<template lang="pug">
  article-wrapper
    bread-crumbs
    div.section__area__left(:class='{"section__area--sp": $store.getters["device/isSP"]}')
      small-posts(:posts='posts' heading='NEWS' prefix='ブログ「' postfix='」 が投稿されました。')
    div.section__area__right(:class='{"section__area--sp": $store.getters["device/isSP"]}')
      section-wrapper(heading='Author')
        div.author
          img(src='~/assets/icon.svg')
          div Daidoooo Taroo
      large-posts(:posts='posts' heading='BLOG')
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import BreadCrumbs from '~/components/BreadCrumbs.vue'
  import ArticleWrapper from '~/components/ArticleWrapper.vue'
  import SectionWrapper from '~/components/SectionWrapper.vue'
  import SmallPosts from '~/components/SmallPosts.vue'
  import LargePosts from '~/components/LargePosts.vue'

  export default {
    head(){
      return {
        title: 'JavaScriptに関するお知らせ',
      }
    },
    components:{
      BreadCrumbs,
      ArticleWrapper,
      SectionWrapper,
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

.section__area__left
  width calc(1020px - 15px * 3 - 330px)
.section__area__right
  width 330px
.section__area--sp
  width 100vw

.author
  width 143px
  height 143px
  border 1px solid #cccccc
  box-sizing border-box
  display flex
  flex-direction column
  align-items center
  justify-content space-between
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
