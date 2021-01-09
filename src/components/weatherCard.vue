<template>
  <div class="max-w-9/10 sm:max-w-full">
    <button
      v-if="toggle.toggleTransform"
      class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default z-10"
    ></button>
    <div
      class="animationCardContainer select-none"
      @click="toggle.toggleTransform = !toggle.toggleTransform"
      :class="{
        animationCardWrapper: toggle.toggleTransform,
        'z-20': toggle.toggleTransform
      }"
    >
      <frontWeatherPage :city="city" />
      <backWeatherPage
        :status="status"
        :Cloudiness="Cloudiness"
        :Temperature="Temperature"
        :SensoryTemp="SensoryTemp"
        :windSpeed="windSpeed"
        :windDeg="windDeg"
        :country="country"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import frontWeatherPage from './frontWeatherCard.vue'
import backWeatherPage from './backWeatherCard.vue'

export default defineComponent({
  components: { frontWeatherPage, backWeatherPage },
  props: {
    city: {
      type: String
    },
    status: {
      type: String
    },
    Cloudiness: {
      type: Number
    },
    Temperature: {
      type: Number
    },
    SensoryTemp: {
      type: Number
    },
    windSpeed: {
      type: Number
    },
    windDeg: {
      type: Number
    },
    country: {
      type: String
    }
  },
  setup() {
    const toggle = reactive({
      toggleTransform: false
    })
    return {
      toggle
    }
  }
})
</script>
