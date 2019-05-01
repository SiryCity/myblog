<template lang="pug">
  article-wrapper
    section-wrapper
      iframe(
        :src='apiKey',
        width='100%',
        height='720px',
        frameborder='0',
        marginheight='0',
        marginwidth='0'
      ) 読み込んでいます...
</template>

<script>
import ArticleWrapper from '~/components/ArticleWrapper.vue'
import SectionWrapper from '~/components/SectionWrapper.vue'
export default {
    head(){ 
      return {
        title: 'お問い合わせ',
        type: 'website',
        url: this.currentUrl,
      }
    },
  components: {
    ArticleWrapper,
    SectionWrapper
  },
  asyncData: context =>
    ({
      apiKey:`https://docs.google.com/forms/d/e/${context.env.FORMS_API}/viewform?embedded=true`
    }),
  data: () =>
    ({
      currentUrl: null
    }),
  mounted(){
    this.currentUrl = location.href
  }
}
</script>
