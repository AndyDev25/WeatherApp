<template>
  <div class="max-w-9/10 sm:max-w-full">
    <div class="relative cursor-pointer frontPage">
      <img
        src="@/assets/image/coldCard.jpg"
        alt="coldCard"
        class="rounded-lg w-cardImage h-cardImage object-cover"
      />
      <div
        class="absolute top-midY text-black text-center text-4xl font-light w-full max-w-full"
      >
        {{ city }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    city: {
      type: String
    }
  },
  setup() {
    return {}
  }
})
</script>
