<template>
  <ClassInfo :data="data"></ClassInfo>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ClassInfo from '@/components/ClassInfo.vue'
import axios from 'axios'

export default defineComponent({
  name: 'ClassData',
  components: {
    ClassInfo
  },
  props: {
    path: String
  },
  data() {
    return {
      data: {}
    }
  },
  created() {
    // Simple GET request using axios
    axios
      .get('https://www.dnd5eapi.co/api/classes/' + this.$route.params.name)
      .then((response) => (this.data = response.data))
  }
})
</script>
