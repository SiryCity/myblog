<template lang="pug">
section-wrapper(title='BLOG')
  div.post-small(
    v-for='(post, i) in posts',
    :key='`post-small${i}`'
    :class='{"post--notfirst": i}'
  )
    tag-box(:date='post.date' :tags='post.tags')
    nuxt-link(:to='{name:"posts-date", params:{date: post.date}}') {{post.title}}
</template>

<script>
import SectionWrapper from '~/components/SectionWrapper.vue'
import TagBox from '~/components/TagBox.vue'
export default {
  props: ['posts'],
  components:{
    SectionWrapper,
    TagBox
  },
}
</script>

<style lang="stylus" scoped>
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

.post--notfirst
  border-top 1px dotted #cccccc
</style>
