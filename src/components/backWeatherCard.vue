<template>
  <BackCardInfo>
    <h2 class="text-lg sm:text-xl">
      {{ country }}
    </h2>
    <div class="flex flex-col items-start flex-wrap space-y-2">
      <div role="clouds">
        <div class="flex items-center">
          <img src="@/assets/svgs/cloud.svg" alt="cloud" class="w-6 h-6" />
          <p>Status: {{ status }},</p>
        </div>
        <div class="flex items-center">
          <img src="@/assets/svgs/cloud.svg" alt="cloud" class="w-6 h-6" />
          <p>Cloudiness: {{ Cloudiness }}%</p>
        </div>
      </div>
      <div role="temperature" class="">
        <div class="flex items-center">
          <img src="@/assets/svgs/coldTemp.svg" alt="cloud" class="w-6 h-6" />
          <p>Temperature: {{ convertTemperature(Temperature) }}°C</p>
        </div>
        <div class="flex items-center">
          <img src="@/assets/svgs/coldTemp.svg" alt="cloud" class="w-6 h-6" />
          <p>Sensory temp: {{ convertSensoryTemp(SensoryTemp) }}°C</p>
        </div>
      </div>
      <div role="wind">
        <div class="flex items-center">
          <img src="@/assets/svgs/windSpeed.svg" alt="cloud" class="w-6 h-6" />
          <p>Wind speed: {{ windSpeed }}m/sec</p>
        </div>
        <div class="flex items-center">
          <img src="@/assets/svgs/windSpeed.svg" alt="cloud" class="w-6 h-6" />
          <p>Wind deg: {{ windDeg }}°</p>
        </div>
      </div>
    </div>
  </BackCardInfo>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackCardInfo from './backCardInfoContainer.vue'
import { useStore } from 'vuex'
import { capitalize } from 'lodash-es'

export default defineComponent({
  components: { BackCardInfo },
  props: {
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
    const store = useStore()

    const convertTemperature = (Temp: number) => {
      return Math.floor(Temp - 273.15)
    }
    const convertSensoryTemp = (SensoryTemp: number) => {
      return Math.floor(SensoryTemp - 273.15)
    }
    return {
      convertTemperature,
      convertSensoryTemp
    }
  }
})
</script>

<style scoped></style>
