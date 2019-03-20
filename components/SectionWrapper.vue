<template lang="pug">
  section.section(:class='[$store.getters["device/isSP"] ? "section--SP" : "section--PC"]')
    div.section__heading(v-if='heading') {{heading}}
    slot
</template>

<script>
export default {
  props: ['heading']
}
</script>

<style lang="stylus" scoped>
.section
  width 100%
  padding 15px
  background-color #fefefe
  box-shadow 1px 1px 2px rgba(128,128,128,0.5)
  overflow scroll
.section--SP
  border-top 1px dotted #cccccc
.section--PC
  margin-bottom 15px

.section__heading
  color #0475C2
  display inline-block
  font-size 22px
  height 41px
  border-bottom 2.5px solid #0475c2
  margin-bottom 5px
  &:first-letter
    font-size 40px
</style>
