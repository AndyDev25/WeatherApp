<template>
  <div class="max-w-9/10 sm:max-w-full">
    <div class="relative cursor-pointer backPage">
      <img
        :src="`${bgImage}`"
        alt="coldCard"
        class="rounded-lg w-cardImage h-cardImage object-cover"
      />
      <div class="absolute inset-0 top-24 text-black">
        <div
          class="font-light flex flex-col items-center justify-center text-lg"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    bgImage: {
      type: String
    }
  },
  setup() {
    return {}
  }
})
</script>
