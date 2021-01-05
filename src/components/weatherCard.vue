<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const convertToCelsium = (temperature: number) => {
      return temperature - 273.15
    }
    return {}
  }
})
</script>
