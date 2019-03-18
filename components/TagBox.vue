<template lang="pug">
  div
    p.date {{date.replace(/-/g, '/')}}
    p.tag(v-for='(tag, i) in tags' :key='`tagbox-${i}`') {{tag}}
</template>

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
</style>

<script>
export default {
  props: ['date', 'tags']
}
</script>
