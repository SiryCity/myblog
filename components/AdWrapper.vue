<template lang="pug">
  ad.ad(:class='{"ad--SP": $store.state.device.isSP, "ad--PC": !$store.state.device.isSP, "ad--shading": shading }')
    div.ad__heading スポンサーリンク
    slot
</template>

<script>
export default {
  props: ['shading']
}
</script>


<style lang="stylus" scoped>
.ad
  width 100%
  background-color #fefefe
  overflow scroll
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding 0 15px 15px
.ad--SP
  border-top 1px dotted #cccccc
.ad--PC
  margin-bottom 15px

.ad--shading
  box-shadow 1px 1px 2px rgba(128,128,128,0.5)


.ad__heading
  height 30px
  line-height 35px
  color #666
  font-size 12px
  font-weight bold

</style>
