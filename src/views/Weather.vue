<template>
  <div
    class="bg-gradient-to-t via-red-400 from-yellow-300 to-red-400 min-h-screen"
  >
    <WeatherSearch />
    <transition-group
      tag="div"
      name="Weather"
      class="flex flex-col md:flex-row justify-start items-center flex-wrap weatherWidth mx-auto max-w-full"
      v-cloak
    >
      <WeatherCard
        class="mx-5"
        v-cloak
        v-for="weather in Weather"
        :key="weather.cityWeather[0].id"
        :city="weather.city"
        :country="weather.countryInfo.country"
        :status="weather.cityWeather[0].description"
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
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import WeatherSearch from '@/components/weatherSearch.vue'
import WeatherCard from '@/components/weatherCard.vue'

export default defineComponent({
  components: { WeatherSearch, WeatherCard },
  setup() {
    const store = useStore()

    const Weather = store.state.WeatherData

    return {
      Weather
    }
  }
})
</script>
