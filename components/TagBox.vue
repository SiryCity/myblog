<template lang="pug">
  div
    p.date {{date.replace(/-/g, '/')}}
    nuxt-link.tag(
      v-for='(tag, i) in tags'
      :key='`tagbox-${i}`'
      :to='{name:"tags-tagname", params:{tagname: tag}}'
      :class=`{
        'tag--js': tag === 'JavaScript',
        'tag--css': tag === 'CSS',
        'tag--python': tag === 'Python',
        'tag--html': tag === 'HTML',
        'tag--math': tag === 'Math',
        'tag--others': tag === 'Others',
      }`
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
  text-decoration none

.tag--js
  background-color #FF85AD
.tag--css
  background-color #FF9900
.tag--python
  background-color #787FDC
.tag--html
  background-color #E5457D
.tag--math
  background-color #56BF00
.tag--others
  background-color #BA3CB8

</style>