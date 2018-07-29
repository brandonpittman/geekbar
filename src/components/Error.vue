<template>
  <Slide>
    <h1 slot="title">エラー</h1>
  </Slide>
</template>

<script>
import Slide from '@/components/Slide'
export default {
  components: { Slide }
}
</script>

<style scoped>
h1 {
  background-color: red;
  color: white;
  text-align: center;
  border-radius: 10px;
  padding: 1rem;
}
</style>
