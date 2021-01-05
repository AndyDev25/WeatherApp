<template>
  <div>
    <div>
      <figure class="flex flex-col p-4 bg-white">
        <img src="../assets/image/coldBg.jpg" alt="coldCard" class="w-130" />
        <figcaption class="">Michalovce</figcaption>
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const convertToCelsium = (temperature: number) => {
      return temperature - 273.15
    }
    return {}
  }
})
</script>

<style lang="css" scoped></style>
