<template>
  <div class="max-w-9/10 sm:max-w-full ">
    <div class="relative cursor-pointer frontPage">
      <img
        src="@/assets/image/coldCard.jpg"
        alt="coldCard"
        class="rounded-lg w-cardImage h-cardImage object-cover"
      />
      <h2
        class="absolute top-midY left-midX text-black text-center text-4xl font-light"
      >
        Michalovce
      </h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
