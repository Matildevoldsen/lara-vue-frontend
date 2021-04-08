<template>
  <div class="relative inline-block text-left">
    <div>
      <button v-on:click="show = !show" type="button"
              class=" border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
              id="options-menu">
        {{ menu.title }}
        <img src="~/static/sprite/arrowDown.svg" width="20">
      </button>
    </div>
    <div v-if="show"
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
      <div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    menu: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      show: false
    }
  }
});
</script>
