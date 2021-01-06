<template>
  <div class="">
    <div class="flex flex-col justify-center items-center">
      <div class="w-cardImage max-w-9/10 sm:max-w-full">
        <img
          src="../assets/image/coldCard.jpg"
          alt="coldCard"
          class="rounded-t-md w-cardImage h-cardImage object-cover transition-all duration-250 hover:h-extendedCardImage ease-in-out"
        />
        <div class="bg-white w-full pb-10 font-normal">
          <div class="p-8">
            <h2 class="">Michalovce</h2>
          </div>
        </div>
      </div>
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

<style lang="css" scoped>
.testimg:hover {
  height: 540px;
}
</style>
