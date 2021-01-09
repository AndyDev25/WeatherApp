<template>
  <section class="flex flex-col justify-center items-center h-30vh">
    <div class="flex flex-col items-center max-w-full justify-center">
      <h1 class="text-3xl leading-loose text-black">WeatherApp</h1>
      <div class="relative max-w-full text-center flex flex-col items-center">
        <input
          type="text"
          class="WeatherInput"
          :class="{ shakingEffect: Hidden }"
          spellcheck="false"
          placeholder="City"
          v-model="searchWeather"
          @keyup="search"
        />
        <transition name="popUpCard">
          <button
            class="popUpCardHeight PopUpButton"
            v-if="searchWeather"
            @click="sendData"
            disabled="false"
          >
            <div class="inline-flex space-x-1 items-baseline">
              <section
                class=" p-1 rounded pl-2 pr-0"
                :class="
                  data.weatherData?.city ? '' : ['shiningEffect', 'bg-gray-400']
                "
              >
                <div
                  role="City"
                  :class="data.weatherData?.city ? 'opacity-100' : 'opacity-0'"
                >
                  {{
                    data.weatherData?.city
                      ? data.weatherData?.city
                      : searchWeather
                  }}
                </div>
              </section>
              <span class="ml-0">,</span>
              <section
                class=" p-1 rounded"
                :class="
                  data.weatherData?.city ? '' : ['shiningEffect', 'bg-gray-400']
                "
              >
                <div
                  role="CitySign"
                  :class="data.weatherData?.city ? 'opacity-100' : 'opacity-0'"
                >
                  {{
                    data.weatherData?.countryInfo?.country
                      ? data.weatherData?.countryInfo?.country
                      : 'WA'
                  }}
                </div>
              </section>
            </div>
          </button>
        </transition>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import axios from 'axios'
import { debounce } from 'lodash-es'
import { WeatherInfo } from '@/types/vueInterface.ts'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const data = reactive({
      weatherData: {}
    })
    const store = useStore()
    const KEY = 'f647bd369ac5888e2c0e377ef80fb4f5'

    const Hidden = ref(false)
    const popUpCard = ref(false)

    const removeWhiteSpace = /^\s/
    const searchWeather = ref('')

    const extractData = ({
      id: id,
      name: city,
      weather: cityWeather,
      main: temperature,
      wind: wind,
      timezone: timezone,
      sys: countryInfo,
      clouds: cloudiness
    }: WeatherInfo) => {
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
            data.weatherData = extractData(res.data)
          })
          .catch(err => {
            if (err) {
              Hidden.value = true
              searchWeather.value = ''
              setTimeout(() => {
                Hidden.value = false
              }, 1000)
            }
          })
      }
    }
    const search = debounce(() => {
      fetchWeather()
    }, 850)

    const sendData = () => {
      // store.commit('PUSHDATA', data.weatherData)
      searchWeather.value = ''
      console.log(data.weatherData)
    }

    return {
      searchWeather,
      fetchWeather,
      search,
      Hidden,
      popUpCard,
      sendData,
      data
    }
  }
})
</script>

<style lang="css" scoped></style>
