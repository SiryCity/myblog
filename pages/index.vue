<template lang="pug">
  div.main
    div.section__wrapper__left
      section.section
        div.title BLOG
        div.post-small(v-for='(post, i) in posts', :key='`post-small${i}`')
            p {{String(post.date).replace(/-/g, '/')}}
            nuxt-link(:to='{name:"posts-date", params:{date: post.date}}') {{post.title}}
            hr(v-if='i + 1 !== posts.length')
    div.section__wrapper__right
      section.section
        div.title AUTHOR
      section.section
        div.title BLOG
        div.post-large(v-for='(post, i) in posts', :key='`post-large${i}`')
          div.post-large__top
            img(src='~/assets/icon.svg')
            nuxt-link(:to='{name:"posts-date", params:{date: post.date}}')
              p DAIDOooo Taro
              p {{String(post.date).replace(/-/g, '/')}}
              p {{post.title}}
          hr(v-if='i + 1 !== posts.length')
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'

  export default {
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
.main
  width 100%
  height 100%
  display flex
  flex-wrap wrap
  justify-content space-around
  align-items flex-start

.title
  color #0475C2
  display inline-block
  font-size 22px
  height 41px
  border-bottom 3px solid #0475c2

.title:first-letter
  font-size 40px


.section__wrapper__left
  width 645px
  margin 15px 0

.section__wrapper__right
  width 335px
  margin 15px 0
  
.section
  width 100%
  margin-bottom 15px
  padding 15px
  background-color #fefefe
  box-shadow 1px 1px 2px rgba(128,128,128,0.5)
  overflow scroll
.link
  display inline-block

.post-small
  p
    font-size 12px
    padding 0 4px
    margin 10px 4px 10px 0
    display inline-block
    border 1px solid #ccc
    font-weight bold
  a
    color #09c
    text-decoration none
    &:hover
      text-decoration underline
  hr
    border-top 1px dotted #cccccc


.post-large
  height 70px
  margin 10px 0

  .post-large__top
    height 69px
    display flex
    flex-direction column
    flex-wrap wrap
    justify-content flex-start
    align-items flex-start

    img
      width 60px
      height 60px
      border 1px solid #cccccc
      box-sizing border-box

    a
      width calc(100% - 60px)
      height calc(100% - 9px)
      padding-left 2px
      color #09c
      display block
      text-decoration none
      &:hover
        background-color #D9F0F7
        text-decoration underline
    
  hr
    border-top 1px dotted #cccccc

</style>
