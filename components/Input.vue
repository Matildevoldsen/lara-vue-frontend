<template>
  <div>
    <div v-if="iconLeft" class="flex flex-col mb-2">
      <div class="flex relative mb-5 ">
        <span v-if="iconLeft"
              class="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
          <img width="20" :src="iconLeft" :alt="'Icon'"/>
        </span>
        <input :type="type ? type : 'text'" :id="id ? id : ''"
               ref="field" @input="updateField"
               :value="value"
               :class="getClass"
               :placeholder="placeholder"/>
        <svg v-if="error" xmlns="http://www.w3.org/2000/svg" width="15" height="15"
             fill="currentColor" class="absolute text-red-500 right-2 bottom-3" viewBox="0 0 1792 1792">
          <path
            d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z">
          </path>
        </svg>
        <p v-if="error" class="absolute text-sm text-red-500 -bottom-6">
          {{ error }}
        </p>
      </div>
    </div>
    <div v-if="!iconLeft">
      <input :type="type ? type : 'text'" :id="id ? id : ''"
             ref="field" @input="updateField"
             :value="value ? value : ''"
             :class="getClass"
             :placeholder="placeholder"/>
      <svg v-if="error" xmlns="http://www.w3.org/2000/svg" width="15" height="15"
           fill="currentColor" class="absolute text-red-500 right-2 bottom-3" viewBox="0 0 1792 1792">
        <path
          d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z">
        </path>
      </svg>
      <p v-if="error" class="absolute text-sm text-red-500 -bottom-6">
        {{ error }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    error: {
      type: String,
      required: false
    },
    iconLeft: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: true
    },
    formStyle: {
      type: String,
      required: true
    }
  },
  methods: {
    updateField() {
      this.$emit('input', this.$refs.field.value)
    }
  },
  computed: {
    getClass() {
      let errorClass:String = 'ring-red-500 ring-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent';
      let defaultStyle:String = 'rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent';
      let transparentStyle:String = 'rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent';

      if (this.error  ) return errorClass;
      console.log('pass error')

      if (this.formStyle === 'default' || !this.formStyle) {
        return defaultStyle;
      } else if (this.formStyle === 'transparent') {
        return transparentStyle;
      }
    }
  }
});
</script>
