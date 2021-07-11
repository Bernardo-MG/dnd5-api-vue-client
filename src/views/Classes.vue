<template>
  <div class="classes">
    <ClassList></ClassList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ClassList from '@/components/ClassList.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Index',
  components: {
    ClassList
  }
})
</script>
