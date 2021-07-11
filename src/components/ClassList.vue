<template>
  <div>
    Classes list.
    <li v-for="item in items" :key="item.name">
      {{ item.name }}
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ClassList',
  props: {
    items: Array
  },
  data () {
    return {
      counter: this.initialCounter
    }
  }
})
</script>
