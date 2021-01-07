<template>
  <div class="">
    <button
      v-if="toggle.toggleTransform"
      class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
    ></button>
    <div
      class="animationCardContainer flex justify-center select-none"
      @click="toggle.toggleTransform = !toggle.toggleTransform"
      :class="{ animationCardWrapper: toggle.toggleTransform }"
    >
      <frontWeatherPage />
      <backWeatherPage />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import frontWeatherPage from './frontWeatherCard.vue'
import backWeatherPage from './backWeatherCard.vue'

export default defineComponent({
  components: { frontWeatherPage, backWeatherPage },
  setup() {
    const toggle = reactive({
      toggleTransform: false
    })
    const convertToCelsium = computed((temperature: number) => {
      return temperature - 273.15
    })

    return {
      toggle
    }
  }
})
</script>
<style lang="css" scoped></style>
