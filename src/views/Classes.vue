<template>
  <div class="classes">
    <ClassList :items="classes"></ClassList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ClassList from '@/components/ClassList.vue'
import axios from 'axios'

export default defineComponent({
  name: 'Classes',
  components: {
    ClassList
  },
  data() {
    return {
      classes: []
    }
  },
  created() {
    // Simple GET request using axios
    axios
      .get('https://www.dnd5eapi.co/api/classes/')
      .then((response) => (this.classes = response.data.results))
  }
})
</script>
