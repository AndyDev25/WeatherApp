<template>
  <div
    class="bg-gradient-to-t via-red-400 from-yellow-300 to-red-400 min-h-screen"
  >
    <WeatherSearch />
    <div
      class="flex flex-col md:flex-row justify-center md:space-x-8 items-center"
    >
      <WeatherCard
        v-for="weather in Weather"
        :key="weather.cityWeather.id"
        :city="weather.city"
        :country="weather.countryInfo.country"
        :status="weather.cityWeather[0].description"
        :Cloudiness="weather.cloudiness.all"
        :Temperature="weather.temperature.temp"
        :SensoryTemp="weather.temperature.feels_like"
        :windSpeed="weather.wind.speed"
        :windDeg="weather.wind.deg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WeatherSearch from '@/components/weatherSearch.vue'
import WeatherCard from '@/components/weatherCard.vue'
import { useStore } from 'vuex'

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

<style lang="css" scoped></style>
