<template lang="pug">
  div.main
    div.section__wrapper__left
      section.section
        div.title Blog
        div(v-for='post in posts', :key='post.title')
            p.link {{post.date}}
            nuxt-link.link(:to='{name:"posts-date", params:{date: post.date}}')
              p.link {{post.title}}
            hr.hr
    div.section__wrapper__right
      section.section
        div.title Author
      section.section
        div.title Blog
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'

  export default {
    async asyncData({env}){
      const contents = await createClient().getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.date',
      })
      return {posts: contents.items.map(item => item.fields)}
    }
  }
</script>

<style lang="stylus" scoped>
.main
  width 100%
  height 100%
  display flex
  flex-wrap wrap
  justify-content space-around
  align-items flex-start

.title
  color #0475C2
  font-size 24px

.title:first-letter
  font-size 40px

.title:not(:first-letter)
  text-decoration underline

.section__wrapper__left
  width 645px
  margin 15px 0

.section__wrapper__right
  width 335px
  margin 15px 0
  
.section
  width 100%
  margin-bottom 15px
  padding 15px
  background-color #fefefe
  box-shadow 1px 1px 2px rgba(128,128,128,0.5)
.link
  display inline-block
.hr
  border-top 1px dotted #cccccc

</style>
