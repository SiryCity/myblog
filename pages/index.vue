<template lang="pug">
  article-wrapper
    div.section__area__left
      section-wrapper(title='BLOG')
        div.post-small(
          v-for='(post, i) in posts',
          :key='`post-small${i}`'
          :class='{"post--notfirst": i}'
        )
          tag-box(:date='post.date' :tags='post.tags')
          nuxt-link(:to='{name:"posts-date", params:{date: post.date}}') {{post.title}}
    div.section__area__right
      section-wrapper(title='AUTHOR')
        div.author
          img(src='~/assets/icon.svg')
          div test
      section-wrapper(title='BLOG')
        div.post-large(
          v-for='(post, i) in posts',
          :key='`post-large${i}`',
          :class='{"post--notfirst": i}'
        )
          img(src='~/assets/icon.svg')
          nuxt-link(:to='{name:"posts-date", params:{date: post.date}}')
            p.post-large__tag {{post.tags[0]}}
            p.post-large__date {{post.date.replace(/-/g, '/')}}
            p.post-large__title {{post.title}}
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
    }
  }
</script>

<style lang="stylus" scoped>

.section__area__left
  width calc(1020px - 15px * 3 - 330px)
  max-width 100vw

.section__area__right
  width 330px
  max-width 100vw

.post-small
  margin 5px 0
  padding 5px 0
  box-sizing border-box
  a
    display inline-block
    color #09c
    text-decoration none
    margin 4px 0 0 4px
    &:hover
      text-decoration underline

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

.post-large
  margin 5px 0
  padding 5px 0
  box-sizing border-box
  display flex
  img
    width 60px
    height 60px
    border 1px solid #cccccc
    box-sizing border-box
  a
    width calc(100% - 64px)
    height 60px
    display block
    padding-left 4px
    color #09c
    text-decoration none
    &:hover
      background-color #D9F0F7
    .post-large__tag
      color #173759
    .post-large__date
      font-size 12px
      color #333333

.post--notfirst
  border-top 1px dotted #cccccc

</style>
