<template>
  <div>
    Classes list.
    <div v-for="item in items" :key="item.index">
      <router-link :to="{ name: 'class_info', params: { name: item.index } }">
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ClassList',
  props: {
    items: Array
  },
  data() {
    return {
      counter: this.initialCounter
    }
  }
})
</script>
