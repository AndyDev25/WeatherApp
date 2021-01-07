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
              <h2 class="text-lg sm:text-xl">
                SK
              </h2>
              <div class="flex flex-col items-start flex-wrap ">
                <div role="clouds">
                  <div class="flex items-center">
                    <img
                      src="@/assets/svgs/cloud.svg"
                      alt="cloud"
                      class="w-6 h-6"
                    />
                    <p>Status: broken clouds,</p>
                  </div>
                  <div class="flex items-center">
                    <img
                      src="@/assets/svgs/cloud.svg"
                      alt="cloud"
                      class="w-6 h-6"
                    />
                    <p>
                      Cloudiness: 100%
                    </p>
                  </div>
                </div>
                <div role="temperature">
                  <div class="flex items-center">
                    <img
                      src="@/assets/svgs/coldTemp.svg"
                      alt="cloud"
                      class="w-6 h-6"
                    />
                    <p>Temperature: 2°C</p>
                  </div>
                  <div class="flex items-center">
                    <img
                      src="@/assets/svgs/coldTemp.svg"
                      alt="cloud"
                      class="w-6 h-6"
                    />
                    <p>Sensory temp: 2°C</p>
                  </div>
                </div>
                <div role="wind">
                  <div class="flex items-center">
                    <img
                      src="@/assets/svgs/windSpeed.svg"
                      alt="cloud"
                      class="w-6 h-6"
                    />
                    <p>Wind speed: 3.63 m/sec.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'

export default defineComponent({
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
