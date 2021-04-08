<template>
  <div class="container mx-auto">
    <ArticleList class="mt-10">
      <ArticleCard :article="article" :user="user"/>
      <ArticleCard :article="article" :user="user"/>
      <ArticleCard :article="article" :user="user"/>
      <ArticleCard :article="article" :user="user"/>
      <ArticleCard :article="article" :user="user"/>
      <ArticleCard :article="article" :user="user"/>
      <ArticleCard :article="article" :user="user"/>
    </ArticleList>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      user: {
        name: "Matilde",
        avatar: "https://scontent-lhr8-2.xx.fbcdn.net/v/t1.6435-9/79306191_1054480084894346_4727273071650537472_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=IRIFN3F1cvoAX9ypCJy&_nc_ht=scontent-lhr8-2.xx&oh=eba3e0a3c48a6dbbad46307a6e2f730f&oe=6095DF24"
      },
      article: {
        thumbnail: 'http://tailwind-kit.com/images/blog/6.jpg',
        thumbnail_alt: "Hello World",
        title: "Hello",
        sub_heading: "Hello world.... subheading",
        meta_description: "Lorem ipsum lorem ipsum",
        estimated_read_time: "6 min",
        created_at: "22nd Nov 2020"
      }
    }
  }
})
</script>
