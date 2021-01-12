<template>
  <div
    class="bg-gradient-to-t via-red-400 from-yellow-300 to-red-400 min-h-screen"
  >
    <WeatherSearch @push-data="Weather.push($event)" />

    <transition-group
      tag="div"
      name="Weather"
      class="flex flex-col md:flex-row justify-center items-center flex-wrap w-full mx-auto max-w-full"
      v-cloak
    >
      <WeatherCard
        class="m-4"
        v-cloak
        v-for="weather in Weather"
        :key="weather.cityWeather[0].id"
        :city="weather.city"
        :country="weather.countryInfo.country"
        :status="weather.cityWeather[0]"
        :Cloudiness="weather.cloudiness.all"
        :Temperature="weather.temperature.temp"
        :SensoryTemp="weather.temperature.feels_like"
        :windSpeed="weather.wind.speed"
        :windDeg="weather.wind.deg"
      />
    </transition-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import WeatherSearch from '@/components/weatherSearch.vue'
import WeatherCard from '@/components/weatherCard.vue'
import { WeatherInfo } from '@/types/vueInterface.ts'

export default defineComponent({
  components: { WeatherSearch, WeatherCard },
  setup() {
    const Weather = ref<WeatherInfo[]>([])

    return {
      Weather
    }
  }
})
</script>

<style lang="css" scoped>
/* TRANSITIONs */
.Weather-enter-active,
.Weather-leave-active {
  transition: all 0.2s;
}

.Weather-enter-from,
.Weather-leave-to {
  opacity: 0;
  transform: scale(0.75);
}
</style>
