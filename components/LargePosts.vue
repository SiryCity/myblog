<template lang="pug">
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
import SectionWrapper from '~/components/SectionWrapper.vue'
export default {
  props: ['posts'],
  components:{
    SectionWrapper
  },
}
</script>

<style lang="stylus" scoped>
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
