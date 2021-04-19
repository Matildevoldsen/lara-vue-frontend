<template>
  <section class="bg-gray-100 bg-opacity-50 mt-5 mb-5">
    <div class="container max-w-2xl mx-auto shadow-md md:w-3/4 z-10">
      <div class="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
        <div class="max-w-sm mx-auto md:w-full md:mx-0">
          <div class="inline-flex items-center space-x-4">
            <a href="#" class="circle border-4 border-white shadow">
              <span class="initials">{{
                  $auth.user.name.split(" ").map((n, i, a) => i === 0 || i + 1 === a.length ? n[0] : null).join("")
                }}</span>
            </a>
            <svg class="bg-white hover:cursor-text shadow p-2 rounded-full w-8 text-indigo-500 absolute"
                 id="pen-position" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
            </svg>
            <h1 class="text-gray-600">
              <input v-model="form.name"
                     type="text" id="company-name"
                     class="bg-gray-100 rounded-lg border-transparent flex-1 appearance-none w-full py-2 px-4 text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                     placeholder="Company Name"/>
            </h1>
          </div>
        </div>
      </div>
      <div class="space-y-6 bg-white">
        <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
          <h2 class="max-w-sm mx-auto md:w-1/3">
            Account
          </h2>
          <div class="max-w-sm mx-auto md:w-2/3">
            <div class=" relative ">
              <Input
                formStyle="transparent"
                :error="errors.email && errors.email[0] ? errors.email[0] : ''"
                v-model="form.email" type="email" placeholder="email"
              />
            </div>
          </div>
        </div>
        <hr/>
        <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
          <h2 class="max-w-sm mx-auto md:w-1/3">
            Personal info
          </h2>
          <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
            <div>
              <div class=" relative ">
                <input type="text" id="user-info-phone"
                       class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                       placeholder="Phone number"/>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
          <h2 class="max-w-sm mx-auto md:w-1/3">
            Other
          </h2>
          <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
            <div>
              <div class=" relative flex">
                <button type="button" v-on:click="deleteAccount"
                        class="py-2 mr-5 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Delete
                </button>
                <button type="button"
                        class="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Disable Account
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
          <button v-on:submit.prevent="updateProfileSettings" type="submit"
                  class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Save
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      form: {
        name: this.$auth.user.name,
        email: this.$auth.user.email,
        password: "",
        profile_photo_path: this.$auth.user.profile_photo_path
      },
      errors: [],
      message: "",
      shouldDeleteAccount: false,
    }
  },
  methods: {
    updateProfileSettings() {
      this.$axios.get('sanctum/csrf-cookie');
      this.$axios.put('user/profile-information', this.form);

      this.$auth.fetchUser();
    },
    async deleteAccount() {
      try {
        await this.$axios.delete('api/user');
      } catch (e) {
        if (e.response.status === 423) {
          this.shouldDeleteAccount = true;
        }
      }
    }
  }
});
</script>
<style>
:root {
  --avatar-size: 6rem;
  /* change this value anything, e.g., 100px, 10rem, etc. */
}

.circle {
  background-color: #ccc;
  border-radius: 50%;
  height: var(--avatar-size);
  text-align: center;
  width: var(--avatar-size);
}

.initials {
  font-size: calc(var(--avatar-size) / 2); /* 50% of parent */
  line-height: 1;
  position: relative;
  top: calc(5rem / 4); /* 25% of parent */
}

#pen-position {
  margin-top: -42px;
  margin-left: 56px !important;
}
</style>
