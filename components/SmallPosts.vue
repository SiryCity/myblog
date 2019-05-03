<template lang="pug">
section-wrapper(:heading='heading', :kana='kana')
  div.post-small(
    v-for='(post, i) in posts',
    :key='`post-small${i}`'
    :class='{"post--notfirst": i}'
  )
    tag-box(:date='post.date' :tags='post.tags')
    nuxt-link(:to='{name:"posts-date", params:{date: post.date}}')
      span.post-small--new(v-if='!i') new
      | {{prefix}}{{post.title}}{{postfix}}
</template>

<script>
import SectionWrapper from '~/components/SectionWrapper.vue'
import TagBox from '~/components/TagBox.vue'
export default {
  props: ['posts', 'heading', 'kana', 'prefix', 'postfix'],
  components:{
    SectionWrapper,
    TagBox
  },
}
</script>

<style lang="stylus" scoped>
.post-small
  width 100%
  margin 5px 0
  padding 5px 0
  font-size 14px
  box-sizing border-box
  a
    display inline-block
    color #09c
    text-decoration none
    margin 4px 0 0 0
    &:hover
      text-decoration underline
  .post-small--new
    color white
    background-color #52B800
    font-size 10px
    padding 2px 4px 0
    font-weight bold
    margin-right 2px

.post--notfirst
  border-top 1px dotted #cccccc
</style>
