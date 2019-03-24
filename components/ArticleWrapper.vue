<template lang="pug">
  article.article(:class='{"article--PC": !$store.state.device.isSP}'): slot
</template>

<style lang="stylus" scoped>
.article
  width 100%
  height 100%
  min-height 100vh
  display flex 
  flex-wrap wrap
  justify-content space-between
  align-content flex-start
.article--PC
  padding 15px
</style>
