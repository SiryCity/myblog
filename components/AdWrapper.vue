<template lang="pug">
  ad.ad(:class='[$store.state.device.isSP ? "ad--SP" : "ad--PC"]')
    div.ad__heading スポンサーリンク
    slot
</template>


<style lang="stylus" scoped>
.ad
  width 100%
  background-color #fefefe
  box-shadow 1px 1px 2px rgba(128,128,128,0.5)
  overflow scroll
  display flex
  flex-direction column
  justify-content space-evenly
  align-items center
.ad--SP
  border-top 1px dotted #cccccc
.ad--PC
  margin-bottom 15px

.ad__heading
  height 20px
  line-height 20px
  color #666
  font-size 12px
  padding-left 7px
  font-weight bold

</style>
