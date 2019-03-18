<template lang="pug">
  article.article: slot
</template>

<style lang="stylus" scoped>
.article
  width 100%
  height 100%
  min-height 100vh
  display flex
  flex-wrap wrap
  justify-content space-between
  padding 15px
</style>
