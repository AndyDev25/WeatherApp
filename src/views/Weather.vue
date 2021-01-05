<template>
  <div
    class="bg-gradient-to-t via-red-400 from-yellow-300 to-red-400 min-h-screen"
  >
    <WeatherSearch />
    <div class="flex justify-center space-x-8">
      <WeatherCard />
      <WeatherCard />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WeatherSearch from '@/components/weatherSearch.vue'
import WeatherCard from '@/components/weatherCard.vue'

export default defineComponent({
  components: { WeatherSearch, WeatherCard },
  setup() {
    return {}
  }
})
</script>
