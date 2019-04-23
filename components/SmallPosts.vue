<template lang="pug">
section-wrapper(:heading='heading', :kana='kana')
  div.post-small(
    v-for='(post, i) in posts',
    :key='`post-small${i}`'
    :class='{"post--notfirst": i}'
  )
    tag-box(:date='post.date' :tags='post.tags')
    nuxt-link(:to='{name:"posts-date", params:{date: post.date}}') {{prefix}}{{post.title}}{{postfix}}
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
    margin 4px 0 0 4px
    &:hover
      text-decoration underline

.post--notfirst
  border-top 1px dotted #cccccc
</style>
