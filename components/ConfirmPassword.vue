<template>
  <div class="absolute h-screen w-full h-full z-50 inset-0 overflow-y-auto">
    <div class="">
      <div class="absolute flex justify-center justify-items-center align-baseline w-full h-full inset-0 bg-gray-500 opacity-75 ">
        <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
          <div class="w-full z-50 h-full text-center">
            <div class="flex h-full flex-col justify-between">
              <p class="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
                Confirm your password
              </p>
              <p class="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
                <Input type="password" v-model="form.password"/>
              </p>
              <div class="flex items-center justify-between gap-4 w-full mt-8">
                <button type="button"
                        class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Delete
                </button>
                <button type="button"
                        class="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      form: {
        password: ""
      }
    }
  }
});
</script>
