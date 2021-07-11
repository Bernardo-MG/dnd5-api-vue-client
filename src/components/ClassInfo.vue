<template>
  <h1>{{this.data.name}}</h1>
  <p>Hit Dice: {{this.data.hit_die}}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ClassData',
  props: {
    data: Object
  }
})
</script>
