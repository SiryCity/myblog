<template lang="pug">
  div#background
    div#root
      header
        nuxt-link(to='./')
          h1 JavaScriptに関するお知らせ
      nav
        nuxt-link(to='./') HOME
        nuxt-link(to='./') aaa
      main: nuxt
      footer: div &copy; 2019 JavaScriptに関するお知らせ
</template>

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
*, *:before, *:after
  box-sizing border-box
  margin 0

#background
  width 100%
  display flex
  justify-content center
  background-color #f6f6f6

  #root
    width 100%
    max-width 1100px
    display flex
    flex-direction column
    align-items center
    justify-content flex-start
    background-color #fefefe
    box-shadow 1px 1px 4px 1px rgba(0,0,0,0.1)

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
        justify-content center
        align-items center
        text-decoration none
        h1
          font-size 22px
          font-weight normal
          color white

    nav
      width 100%
      height 14px
      line-height 14px
      margin-top 21px
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
      width calc(100% - 80px)
      margin 15px 0
      background-color #f6f6f6
      box-shadow 1px 1px 2px rgba(128,128,128,0.5) inset 
      order 30

    footer
      width 100vw
      height 100px
      background-color #0073c2
      display flex
      justify-content center
      align-items center
      color white
      order 40

</style>

