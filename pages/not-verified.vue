<template>
  <div class="container">
    <div class="flex justify-center flex-col items-center">
      <h1 class="text-center text-lg">Please verify your email</h1>
      <form class="mt-5 mb-5" v-on:submit.prevent="resendEmailVerificationLink">
        <button v-on:submit.prevent="resendEmailVerificationLink"
           class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
          Resend Email
        </button>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: ['auth'],
  methods: {
    async resendEmailVerificationLink() {
      await this.$axios.post('email/verification-notification')
    }
  }
});
</script>
