<template lang="pug">
  article-wrapper
    ad-wrapper(:shading='true')
      adsbygoogle.responsive-ad--large(:ad-slot='"8176575284"')
    small-posts(:posts='posts' heading='BLOG' kana='記事一覧' :SNS='true')
        nuxt-link(:to='{name: "index"}') home
    ad-wrapper(:shading='true')
      adsbygoogle.responsive-ad--large(:ad-slot='"8176575284"')
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import ArticleWrapper from '~/components/ArticleWrapper.vue'
import SmallPosts from '~/components/SmallPosts.vue'
import AdWrapper from '~/components/AdWrapper.vue'
import Meta from '~/assets/mixins/meta.js'

export default {
  mixins: [Meta],
  data: () => 
    ({
      meta: {
        title: '記事一覧',
        type: 'article',
        url: null,
      },
    }),
  components:{
    ArticleWrapper,
    SmallPosts,
    AdWrapper,
  },
  async asyncData({env, payload}){
    if(payload) return payload
    const contents = await createClient().getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.date',
    })
    return {posts: contents.items.map(item => item.fields)}
  },
  mounted(){
    this.url = location.href
  }

}
</script>