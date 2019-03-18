<template lang="pug">
  section.section
    div.title(v-if='title') {{title}}
    slot
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="stylus" scoped>
.section
  width 100%
  margin-bottom 15px
  padding 15px
  background-color #fefefe
  box-shadow 1px 1px 2px rgba(128,128,128,0.5)
  overflow scroll

.title
  color #0475C2
  display inline-block
  font-size 22px
  height 41px
  border-bottom 2.5px solid #0475c2
  margin-bottom 5px
  &:first-letter
    font-size 40px
</style>
