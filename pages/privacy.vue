<template lang="pug">
  article-wrapper
    section-wrapper
      div.privacy-policy__title プライバシーポリシー
      div.privacy-policy
      h2.privacy-policy__heading アクセス解析ツールについて
      p
        | 当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
        | このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
        | このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
        | この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
        | この規約に関して、詳しくは
        a(href='https://www.google.com/analytics/terms/jp.html') こちら
        | 、または
        a(href='https://policies.google.com/technologies/partner-sites?hl=ja') こちら
        | をクリックしてください。

      
      adsbygoogle(:ad-slot='"8176575284"')
</template>

<script>
import ArticleWrapper from '~/components/ArticleWrapper.vue'
import SectionWrapper from '~/components/SectionWrapper.vue'
export default {
    head(){ 
      return {
        title: 'プライバシーポリシー',
        type: 'website',
        url: this.currentUrl,
      }
    },
  components: {
    ArticleWrapper,
    SectionWrapper
  },
  data: () =>
    ({
      currentUrl: null
    }),
  mounted(){
    this.currentUrl = location.href
  }
}
</script>


<style lang="stylus" scoped>

.privacy-policy__title
  width 100%
  font-size 20px
  padding 15px 0
  margin-bottom 15px
  color #18375A
  border-bottom 1px solid #ccc

.privacy-policy
  color #555

.privacy-policy__heading
  font-size 18px
  font-weight normal
  margin-bottom 4px
</style>
