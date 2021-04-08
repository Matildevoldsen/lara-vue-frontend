<template>
  <div v-if="article && user && name"
       class="card-hover overflow-hidden transition-all hover:shadow-2xl shadow-lg rounded-lg h-90 lg:w-96 w-full md:w-80 cursor-pointer m-auto">
    <a href="#" class="w-full block h-full">
      <img v-if="article.thumbnail" :alt="article.thumbnail_alt" :src="article.thumbnail"
           class="max-h-40 w-full object-cover"/>
      <div class="bg-white dark:bg-gray-800 w-full p-4">
        <p class="text-indigo-500 text-md font-medium">
          {{ article.title }}
        </p>
        <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
          {{ article.sub_heading }}
        </p>
        <p class="text-gray-400 dark:text-gray-300 font-light text-md">
          {{ article.meta_description }}
        </p>
        <div class="flex items-center mt-4" v-if="user && user.name && user.avatar">
          <a href="#" class="block relative">
            <img v-if="user && user.name && user.avatar" :alt="'A photo of ' . name" :src="user.avatar"
                 class="mx-auto object-cover rounded-full h-10 w-10 "/>
          </a>
          <div class="flex flex-col justify-between ml-4 text-sm">
            <p class="text-gray-800 dark:text-white">
              {{ name }}
            </p>
            <p class="text-gray-400 dark:text-gray-300">
              {{ article.created_at }} - {{ article.estimated_read_time }}
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue'

export default Vue.extend({
  props: {
    article: {type: Object, required: true},
    user: {type: Object, required: true}
  },
  computed: {
    name(): string {
      return this.user.name;
    }
  }
})
</script>
<style>
.card-hover {
  transition-duration: 1s;
}

.card-hover:hover {
  transform:
    perspective(60em)
    rotateX(18deg);
}
</style>
