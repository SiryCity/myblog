<template lang="pug">
  section.section(:class='[$store.state.device.isSP ? "section--SP" : "section--PC"]')
    div.section__heading スポンサーリンク
    slot
</template>


<style lang="stylus" scoped>
.section
  width 100%
  background-color #fefefe
  box-shadow 1px 1px 2px rgba(128,128,128,0.5)
  overflow scroll
  display flex
  justify-content center
.section--SP
  border-top 1px dotted #cccccc
.section--PC
  margin-bottom 15px

.section__heading
  height 40px
  color #666
  font-size 12px
  line-height 50px
  padding-left 7px
  font-weight bold

</style>
