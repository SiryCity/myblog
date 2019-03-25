<template lang="pug">
  article-wrapper
    iframe(
      :src='apiKey',
      width='100%',
      height='100%',
      frameborder='0',
      marginheight='0',
      marginwidth='0'
    ) 読み込んでいます...
</template>

<script>
import ArticleWrapper from '~/components/ArticleWrapper.vue'
import Meta from '~/assets/mixins/meta.js'
export default {
  mixins: [Meta],
  data: () => 
    ({
      meta: {
        title: 'お問い合わせ',
        type: 'website',
        url: location.href,
      },
    }),
  components: {
    ArticleWrapper,
  },
  asyncData: context =>
    ({
      apiKey:`https://docs.google.com/forms/d/e/${context.env.FORMS_API}/viewform?embedded=true`
    }),
}
</script>
