<template>
  <div class="max-w-9/10 sm:max-w-full">
    <div class="relative cursor-pointer backPage">
      <img
        src="@/assets/image/coldCard.jpg"
        alt="coldCard"
        class="rounded-lg w-cardImage h-cardImage object-cover "
      />
      <div class="absolute inset-0 top-32 text-black">
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
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
