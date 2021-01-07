<template>
  <BackCardInfo>
    <h2 class="text-lg sm:text-xl">
      SK
    </h2>
    <div class="flex flex-col items-start flex-wrap">
      <div role="clouds">
        <div class="flex items-center">
          <img src="@/assets/svgs/cloud.svg" alt="cloud" class="w-6 h-6" />
          <p>Status: broken clouds,</p>
        </div>
        <div class="flex items-center">
          <img src="@/assets/svgs/cloud.svg" alt="cloud" class="w-6 h-6" />
          <p>
            Cloudiness: 100%
          </p>
        </div>
      </div>
      <div role="temperature">
        <div class="flex items-center">
          <img src="@/assets/svgs/coldTemp.svg" alt="cloud" class="w-6 h-6" />
          <p>Temperature: 2°C</p>
        </div>
        <div class="flex items-center">
          <img src="@/assets/svgs/coldTemp.svg" alt="cloud" class="w-6 h-6" />
          <p>Sensory temp: 2°C</p>
        </div>
      </div>
      <div role="wind">
        <div class="flex items-center">
          <img src="@/assets/svgs/windSpeed.svg" alt="cloud" class="w-6 h-6" />
          <p>Wind speed: 3.63 m/sec.</p>
        </div>
      </div>
    </div>
  </BackCardInfo>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackCardInfo from './backCardInfoContainer.vue'
export default defineComponent({
  components: { BackCardInfo },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
