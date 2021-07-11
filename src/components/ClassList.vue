<template>
  <div>
    Classes list.
    <ul>
      <li v-for="item in items" :key="item.index">
        <router-link :to="{ name: 'class_info', params: { name: item.index } }">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ClassList',
  props: {
    items: Array
  }
})
</script>
