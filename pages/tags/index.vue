<template lang="pug">
  article-wrapper
    bread-crumbs
      small-posts(:posts='posts' heading='BLOG')
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import BreadCrumbs from '~/components/BreadCrumbs.vue'
  import ArticleWrapper from '~/components/ArticleWrapper.vue'
  import SmallPosts from '~/components/SmallPosts.vue'

  export default {
    head: () =>
      ({
        title: '全記事一覧',
      }),
    components:{
      BreadCrumbs,
      ArticleWrapper,
      SmallPosts,
    },
    async asyncData({env, payload}){
      if(payload) return payload
      const contents = await createClient().getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.date',
      })
      return {posts: contents.items.map(item => item.fields)}
    }
  }
</script>

