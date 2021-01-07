<template>
  <section class="flex flex-col justify-center items-center h-30vh">
    <h1 class="text-3xl leading-loose text-black">WeatherApp</h1>
    <input
      type="text"
      class="outline-none opacity-80 focus:opacity-90 focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none border border-transparent max-w-9/10 sm:max-w-full w-112 py-2 px-4 bg-white text-gray-800 placeholder-gray-400 shadow-md rounded-lg text-base capitalize"
      spellcheck="false"
      v-model="searchWeather"
      @keyup="search"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import { debounce } from 'lodash-es'
import { weatherInfo } from '@/types/vueInterface.ts'

export default defineComponent({
  setup() {
    const removeWhiteSpace = /^\s/
    const searchWeather = ref('')
    const KEY = 'f647bd369ac5888e2c0e377ef80fb4f5'

    const extractData = ({
      id: id,
      name: city,
      weather: cityWeather,
      main: temperature,
      wind: wind,
      timezone: timezone,
      sys: countryInfo,
      clouds: cloudiness
    }: weatherInfo) => {
      return {
        id,
        city,
        cityWeather,
        temperature,
        wind,
        timezone,
        countryInfo,
        cloudiness
      }
    }

    const fetchWeather = async (): Promise<void> => {
      searchWeather.value.trim()
      if (removeWhiteSpace.test(searchWeather.value) || !searchWeather.value) {
        searchWeather.value = ''
        return
      } else {
        await axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${searchWeather.value}&appid=${KEY}`
          )
          .then(res => {
            const weatherData = res.data
            extractData(weatherData)
            console.log(extractData(weatherData))
          })
          .catch(err => console.log(err))
      }
    }
    const search = debounce(() => {
      fetchWeather()
    }, 750)

    return {
      searchWeather,
      fetchWeather,
      search
    }
  }
})
</script>
