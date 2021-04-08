<template>
  <div>
    <div>
      <nav class="bg-white dark:bg-gray-800  shadow py-4 ">
        <div class="max-w-7xl mx-auto px-8">
          <div class="flex items-center justify-between h-16">
            <div class=" flex items-center">
              <a class="flex-shrink-0 font-bold font-italic text-lg text-uppercase" style="font-family: 'Kanit', sans-serif;" href="/">
                <span class="text-red-500">Lara-</span><span class="text-green-500">vue</span>
              </a>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <a
                    class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    href="/#">
                    Home
                  </a>
                  <a
                    class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    href="/#">
                    Laravel
                  </a>
                  <a
                    class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    href="/#">
                    Vue
                  </a>
                  <a
                    class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    href="/#">
                    Components & Projects
                  </a>
                  <a
                    class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    href="/#">
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="hidden md:block -mr-2 flex">
                <form class="flex w-full max-w-sm space-x-3">
                  <div class=" relative ">
                    <input type="text" id="&quot;form-subscribe-Search"
                           class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                           placeholder="Search..."/>
                  </div>
                  <button
                    class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                    type="submit">
                    Search
                  </button>
                </form>
              </div>
              <div class="ml-4 flex items-center md:ml-6">
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button
                v-on:click="showMenuBar = !showMenuBar"
                class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg width="20" height="20" fill="currentColor" class="h-8 w-8" viewBox="0 0 1792 1792"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div v-if="showMenuBar" class="md:hidden flex justify-center" style="flex-direction: column;align-content: center;align-items: center;">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#">
              Home
            </a>
            <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
              Laravel
            </a>
            <a
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#">
              Vue
            </a>
            <a
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#">
              Components & Projects
            </a>
            <a
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#">
              Contact
            </a>
          </div>
          <div class="p-2 flex">
            <form class="flex w-full max-w-sm space-x-3">
              <div class=" relative ">
                <input type="text" id="search"
                       class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                       placeholder="Search..."/>
              </div>
              <button
                class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>

    <Nuxt/>

    <Footer/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      showMenuBar: false
    }
  }
})
</script>

