<template>
  <div>
    <!-- render data of the person -->
    <ul>
      <li v-for="person in people" :key="person.fields.name">
      {{ person.fields.name }}
      </li>
    </ul>
    <!-- render blog posts -->
    <ul>
      <li v-for="post in posts" :key="post.fields.title">
        {{ post.fields.title }}
      </li>
    </ul>
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'

  const client = createClient()

  export default {
    // `env` is available in the context object
    async asyncData({env}){
      const content = await Promise.all([
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        })
      ])

      console.dir(content)

      return {
        people: content[0].items,
        posts: content[1].items
      }

    }
  }
</script>