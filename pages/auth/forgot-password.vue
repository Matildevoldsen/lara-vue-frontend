<template>
  <div class="container mx-auto mt-5">
    <div
      class="mx-auto mb-5 flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
        Forgot your password?
      </div>
      <div class="mt-8">
        <form action="#" v-on:submit.prevent="forgotPassword" autoComplete="off">
          <div v-if="message" class="bg-yellow-200 border-yellow-600 text-yellow-600 border-l-4 p-4 mb-5" role="alert">
            <p class="font-bold">
              Whoops, looks like something went wrong!
            </p>
            <p>
              {{ this.message }}
            </p>
          </div>

          <Input v-model="form.email" type="email" placeholder="sofia@example.com" iconLeft="/sprite/emailIcon.svg" width="30" :error="errors.email && errors.email[0] ? errors.email[0] : ''"/>

          <div class="flex items-center mb-6 -mt-4">
            <div class="flex ml-auto">
              <a href="#"
                 class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                Forgot Your Password?
              </a>
            </div>
          </div>
          <div class="flex w-full">
            <button type="submit" v-on:submit.prevent="forgotPassword"
                    class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div class="flex items-center justify-center mt-6">
        <a href="#" target="_blank"
           class="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                    <span class="ml-2">
                        You don&#x27;t have an account?
                    </span>
        </a>
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
        email: "",
      },
      errors: [],
      message: ""
    }
  },
  methods: {
    async forgotPassword() {
      await this.$axios.get('sanctum/csrf-cookie')

      await this.$axios.post('forgot-password', this.form)
    }
  }
});
</script>
