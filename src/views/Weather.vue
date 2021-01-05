<template>
  <div
    class="bg-gradient-to-t via-red-400 from-yellow-300 to-red-400 min-h-screen"
  >
    <WeatherSearch />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WeatherSearch from '../components/WeatherSearch.vue'

export default defineComponent({
  components: { WeatherSearch },
  setup() {
    return {}
  }
})
</script>
