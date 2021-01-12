<template>
  <BackCardInfo>
    <h2 class="text-lg sm:text-xl">
      {{ language ? `${country} - ${language}` : country }}
    </h2>
    <div class="flex flex-col items-start flex-wrap space-y-2">
      <div role="clouds">
        <div class="flex items-center">
          <img src="@/assets/svgs/cloud.svg" alt="cloud" class="w-6 h-6" />
          <p>Status: {{ cStatus }},</p>
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
          <p>Sensory temp: {{ convertTemperature(SensoryTemp) }}°C</p>
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
import { capitalize } from 'lodash-es'

export default defineComponent({
  components: { BackCardInfo },
  props: {
    status: {
      type: Object
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
  setup(props) {
    const cStatus = capitalize(props.status?.description)

    /**
     * CONVERT KELVIN TO CELSIA
     *
     * @param   {number}  Temp
     *
     * @return  {[number]} return value in Celsia
     */
    const convertTemperature = (Temp: number) => {
      return Math.floor(Temp - 273.15)
    }
    let language
    ;(() => {
      switch (props.country) {
        case 'SK':
          language = 'Slovakia'
          break
        case 'AF':
          language = 'Afrikaans'
          break
        case 'CZ':
          language = 'Czechia'
          break
        case 'AL':
          language = 'Albania'
          break
        case 'AR':
          language = 'Arabic'
          break
        case 'AZ':
          language = 'Azerbaijani'
          break
        case 'BG':
          language = 'Bulgarian'
          break
        case 'CA':
          language = 'Catalan'
          break
        case 'DA':
          language = 'Danish'
          break
        case 'DE':
          language = 'German'
          break
        case 'EL':
          language = 'Greek'
          break
        case 'EN':
          language = 'English'
          break
        case 'EU':
          language = 'Basque'
          break
        case 'FA':
          language = 'Persian'
          break
        case 'FI':
          language = 'Finnish'
          break
        case 'FR':
          language = 'French'
          break
        case 'GL':
          language = 'Galician'
          break
        case 'HE':
          language = 'Hebrew'
          break
        case 'HI':
          language = 'Hindi'
          break
        case 'HR':
          language = 'Croatian'
          break
        case 'HU':
          language = 'Hungarian'
          break
        case 'ID':
          language = 'Indonesian'
          break
        case 'IT':
          language = 'Italian'
          break
        case 'JA':
          language = 'Japanese'
          break
        case 'KR':
          language = 'Korean'
          break
        case 'LA':
          language = 'Latvian'
          break
        case 'LT':
          language = 'Lithuanian'
          break
        case 'MK':
          language = 'Macedonian'
          break
        case 'NO':
          language = 'Macedonian'
          break
        case 'NL':
          language = 'Macedonian'
          break
        case 'PL':
          language = 'Macedonian'
          break
        case 'PT_BR':
          language = 'Macedonian'
          break
        case 'RO':
          language = 'Romanian'
          break
        case 'RU':
          language = 'Russian'
          break
        case 'SV' || 'SE':
          language = 'Swedish'
          break
        case 'SR':
          language = 'Serbian'
          break
        case 'TH':
          language = 'Thai'
          break
        case 'TR':
          language = 'Turkish'
          break
        case 'UA' || 'UK':
          language = 'Ukrainian'
          break
        case 'VI':
          language = 'Vietnamese'
          break
        case 'ZH_CN':
          language = 'Chinese Simplified'
          break
        case 'ZH_TW':
          language = 'Chinese Traditional'
          break
        case 'ZU':
          language = 'Zulu'
          break
      }
    })()
    return {
      convertTemperature,
      cStatus,
      language
    }
  }
})
</script>
