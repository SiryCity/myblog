<template lang="pug">
  div
    p.date {{date.replace(/-/g, '/')}}
    nuxt-link.tag(
      v-for='(tag, i) in tags'
      :key='`tagbox-${i}`'
      :to='{name:"tags-tagname", params:{tagname: tag}}'
    ) {{tag}}
</template>


<script>
export default {
  props: ['date', 'tags']
}
</script>


<style lang="stylus" scoped>
.date
.tag
  height 12px
  line-height 12px
  font-size 12px
  padding 0 12px
  margin-right 2px
  display inline-block
  font-weight bold
.date
  border 1px solid #ccc
.tag
  color #fff
  background-color #FF85AD
  text-decoration none
</style>