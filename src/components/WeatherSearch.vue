<template>
  <section class="flex flex-col justify-center items-center h-30vh">
    <div class="flex flex-col items-center max-w-full">
      <h1 class="text-3xl leading-loose text-black">WeatherApp</h1>
      <div class="relative">
        <input
          type="text"
          class="outline-none opacity-80 focus:opacity-90 focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none border border-transparent max-w-9/10 sm:max-w-full w-112 py-2 px-4 bg-white text-gray-800 placeholder-gray-400 shadow-md rounded-lg text-base capitalize"
          :class="{ shakingEffect: City.NotExist }"
          spellcheck="false"
          placeholder="City"
          v-model="searchWeather"
          @keyup="search"
        />
        <transition name="popUpCard">
          <section
            class="bg-white opacity-75 mt-1 rounded-lg p-3 cursor-pointer hover:opacity-80 absolute w-full"
            v-if="searchWeather"
            @click="sendData"
          >
            {{ searchWeather }}
          </section>
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
    const store = useStore()
    const City = reactive({
      NotExist: false
    })
    const popUpCard = ref(false)

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
            const weatherData = res.data
            extractData(weatherData)
            store.commit('PUSHDATA', extractData(weatherData))
            setTimeout(() => {
              searchWeather.value = ''
            }, 100)
          })
          .catch(err => {
            if (err) {
              City.NotExist = true
              searchWeather.value = ''
              setTimeout(() => {
                City.NotExist = false
              }, 1000)
            }
          })
      }
    }
    const search = debounce(() => {
      fetchWeather()
    }, 750)

    const sendData = () => {
      console.log('TEST')
    }

    return {
      searchWeather,
      fetchWeather,
      search,
      City,
      popUpCard,
      sendData
    }
  }
})
</script>

<style lang="css" scoped>
.City-enter-active,
.City-leave-active {
  transition: all 0.2s;
}

.City-enter-from,
.City-leave-to {
  opacity: 0;
  transform: scale(0.75);
}
/**
 * POPUPCARD
 */
.popUpCard-enter-active,
.popUpCard-leave-active {
  transition: all 0.2s;
}

.popUpCard-enter-from,
.popUpCard-leave-to {
  opacity: 0;
  transform: scale(0.75);
}

.shakingEffect {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translateX(0);
}

@keyframes shake {
  10%,
  90% {
    transform: translateX(-1px);
  }

  20%,
  80% {
    transform: translateX(2px);
  }

  30%,
  50%,
  70% {
    transform: translateX(-4px);
  }

  40%,
  60% {
    transform: translateX(4px);
  }
}
</style>
