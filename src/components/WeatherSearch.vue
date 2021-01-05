<template>
  <section class="flex flex-col justify-center items-center h-30vh">
    <h1 class="text-3xl leading-loose text-black">WeatherApp</h1>
    <input
      type="text"
      class="focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent appearance-none border border-transparent max-w-9/10 sm:max-w-full w-112 py-2 px-4 bg-white text-gray-800 placeholder-gray-400 shadow-md rounded-lg text-base"
      spellcheck="false"
      v-model="searchWeather"
      @keyup="fetchWeather"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import { debounce } from 'lodash-es'

export default defineComponent({
  setup() {
    const removeWhiteSpace = /^\s/
    const searchWeather = ref<string>('')

    const fetchWeather = debounce(async () => {
      searchWeather.value.trim()
      if (removeWhiteSpace.test(searchWeather.value)) {
        searchWeather.value = ''
      } else {
        await axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${searchWeather.value}&appid=${KEY}`
          )
          .then(res => {
            const weatherData: object = res.data
          })
      }
    }, 500)

    return {
      searchWeather,
      fetchWeather
    }
  }
})
</script>
