<template lang="pug">
section-wrapper(:heading='heading')
  nuxt-link.post-large(
    :to='{name:"posts-date", params:{date: post.date}}'
    v-for='(post, i) in posts',
    :key='`post-large${i}`',
    :class='{"post--notfirst": i}'
  )
    img(:src=`
      post.tags[0] === 'JavaScript'
      ? js
      : post.tags[0] === 'CSS'
      ? css
      : icon
    `)
    div
      p.post-large__tag {{post.tags[0]}}
      p.post-large__date {{post.date.replace(/-/g, '/')}}
      p.post-large__title {{post.title}}
</template>

<script>
import SectionWrapper from '~/components/SectionWrapper.vue'
import icon from '~/assets/icon.svg'
import js from '~/assets/js.svg'
import css from '~/assets/css.svg'
export default {
  props: ['posts', 'heading'],
  components:{
    SectionWrapper
  },
  computed:{
    icon: () => icon,
    js: () => js,
    css: () => css,
  }
}
</script>

<style lang="stylus" scoped>
.post-large
  width 100%
  margin 5px 0
  padding 5px 0
  box-sizing border-box
  display flex
  align-items center

  text-decoration none
  &:hover
    background-color #D9F0F7
  img
    width 60px
    height 60px
    border 1px solid #cccccc
    box-sizing border-box
  div
    width calc(100% - 64px)
    display block
    padding-left 4px
    color #09c
    .post-large__tag
      color #173759
    .post-large__date
      font-size 12px
      color #333333
    .post-large__title
      font-size 14px

.post--notfirst
  border-top 1px dotted #cccccc
</style>
