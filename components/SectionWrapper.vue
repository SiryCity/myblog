<template lang="pug">
  section.section(:class='[$store.state.device.isSP ? "section--SP" : "section--PC"]')
    div.section__heading__wrapper
      div.section__heading(v-if='heading || kana') {{heading}}
        div.section__heading__kana {{kana}}
    slot
</template>

<script>
export default {
  props: ['heading', 'kana']
}
</script>

<style lang="stylus" scoped>
.section
  width 100%
  max-height 720px
  padding 15px
  background-color #fefefe
  box-shadow 1px 1px 2px rgba(128,128,128,0.5)
  overflow-y scroll
  display flex
  flex-wrap wrap
  justify-content space-between
.section--SP
  border-top 1px dotted #cccccc
.section--PC
  margin-bottom 15px

.section__heading__wrapper
  width 100%
  display flex
  justify-content space-between
  align-items flex-start
.section__heading
  color #0475C2
  font-size 20px
  height 41px
  line-height 50px
  border-bottom 2.2px solid #0475c2
  margin-bottom 5px
  font-family serif
  font-weight bold 
  filter blur(.5px)
  position relative
  &:first-letter
    font-size 40px
  .section__heading__kana
    font-family "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    font-size 10px
    color #666
    position absolute
    right 0
    top -10px

</style>
