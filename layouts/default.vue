<template lang="pug">
  div.root(:class='{"root--not-finished": !$store.state.device.isFinished}')
    header
      nuxt-link(:to='{name: "index"}')
        h1 JavaScriptに関するお知らせ
        div JavaScriptやCSS、Pythonの技術ブログ
    nav
      nuxt-link(:to='{name: "index"}') HOME
      nuxt-link(:to='{name: "contact"}') CONTACT
    main(:class='[$store.state.device.isSP? "main--sp" : "main--pc"]')
      root-wrapper
        bread-crumbs
        nuxt
    footer
      nuxt-link(:to='{name: "privacy"}') 個人情報保護方針
      div &copy; 2019 JavaScriptに関するお知らせ
</template>


<script> 
import RootWrapper from '~/components/RootWrapper.vue'
import BreadCrumbs from '~/components/BreadCrumbs.vue'
export default {
  components:{
    RootWrapper,
    BreadCrumbs,
  },
  mounted(){
    if(process.client) this.$store.commit('device/identifyDeviceType')
  }
}
</script>

<style lang="stylus">


html 
  font-family "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
  background-color #f6f6f6
*, *:before, *:after
  box-sizing border-box
  margin 0

.root--not-finished
  opacity 0 !important
  visibility hidden !important

body
  width 100%
  display flex
  justify-content center

  .root
    width 100%
    max-width 1100px
    height 100%
    display flex
    flex-direction column
    align-items center
    justify-content flex-start
    background-color #fefefe
    box-shadow 1px 1px 4px 1px rgba(0,0,0,0.1)
    opacity 1
    visibility visible
    transition-duration 1s
    transition-property opacity, visibility
    header
      width 100vw
      height 110px
      box-shadow 0px 9px 3px -3px rgba(128,128,128,0.5)
      background linear-gradient(#0073c2, #02609F)
      order 10
      a
        width 100%
        height 100%
        display flex
        flex-direction column
        justify-content center
        align-items center
        text-decoration none
        h1
          font-size 22px
          font-weight normal
          color white
        div
          color white
    nav
      width 100%
      height 14px
      line-height 14px
      margin 21px 0 15px
      display flex
      justify-content center
      font-size 14px
      font-weight bold
      order 20
      a
        color #18375a
        text-decoration none
        padding-left 14px
        margin-left 14px
        &:nth-of-type(n+2)
          border-left 1px solid #0475C2
    main
      height 100%
      background-color #f6f6f6
      box-shadow 1px 1px 2px rgba(128,128,128,0.5) inset
    footer
      width 100vw
      height 100px
      background-color #0073c2
      display flex
      flex-direction column
      justify-content center
      align-items center
      color white
      order 40
      a
        color white
        text-decoration none

.main--sp
  width 100vw
  order 15
.main--pc
  width calc(100% - 80px)
  order 30

  .responsive-ad--small::-webkit-scrollbar
  .responsive-ad--medium::-webkit-scrollbar
  .responsive-ad--large::-webkit-scrollbar
    display none
}
@media (max-width: 400px)
  .responsive-ad--small
  .responsive-ad--medium
  .responsive-ad--large
    width 320px
    height 320px
    display inline-block
@media (max-width: 480px) and (min-width: 401px)
  .responsive-ad--medium
  .responsive-ad--large
    width 370px
    height 400px
    display inline-block
@media (max-width: 600px) and (min-width: 481px)
  .responsive-ad--medium
  .responsive-ad--large
    width 450px
    height 480px
    display inline-block
@media (max-width: 720px) and (min-width: 601px)
  .responsive-ad--medium
  .responsive-ad--large
    width 570px
    height 570px
    display inline-block
@media (max-width: 960px) and (min-width: 721px)
  .responsive-ad--large
    width 600px
    height 480px
    display inline-block
@media (max-width: 1079px) and (min-width: 961px)
  .responsive-ad--large
    width 840px
    height 480px
    display inline-block
@media (min-width: 1080px)
  .responsive-ad--large
    width 960px
    height 480px


@media (min-width: 401px)
  .responsive-ad--small
    width 320px
    height 480px

@media (min-width: 721px)
  .responsive-ad--medium
    width 615px
    height 615px
</style>

