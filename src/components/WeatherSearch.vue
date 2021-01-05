<template>
  <section class="flex flex-col justify-center items-center h-30vh">
    <h1 class="text-3xl leading-loose text-black">WeatherApp</h1>
    <input
      type="text"
      class="focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent appearance-none border border-transparent max-w-9/10 sm:max-w-full w-112 py-2 px-4 bg-white text-gray-800 placeholder-gray-400 shadow-md rounded-lg text-base"
      spellcheck="false"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>
