<template lang="pug">
  div.breadcrumb__wrapper(:class='{"breadcrumb__wrapper--PC": !$store.state.device.isSP}')
    div.breadcrumb
      s-n-s-box
</template>

<script>
import SNSBox from '~/components/SNSBox.vue'
export default {
  components:{
    SNSBox
  },
}
</script>


<style lang="stylus" scoped>
.breadcrumb__wrapper
  width 100%
  height 125px
  background-color #fff
  box-shadow 1px 1px 2px rgba(128,128,128,0.5)
  display flex
  justify-content center
  align-items center
  .breadcrumb
    width calc(100% - 30px)
    height 95px
    background-color #0475C2
    border-radius 3px
    display flex
    align-items flex-end

.breadcrumb__wrapper--PC
  margin-bottom 15px
</style>
