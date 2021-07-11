<template>
  <div>
    Class {{ $route.params.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ClassData',
  props: {
    data: Object
  },
  data() {
    return {
      info: this.data
    }
  }
})
</script>
