<template>
  <a href="#"
     class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
     role="menuitem">
                <span class="flex flex-col">
                    <span>
                        {{ title }}
                    </span>
                </span>
  </a>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      required: true,
      type: String
    }
  }
});
</script>
