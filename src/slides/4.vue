<template>
  <Slide>
    <template slot="title">コード分割</template>
    <div class="flex justify-between items-center">
      <img class="mx-8" src="/import1.png" alt="">
      <img class="mx-8" src="/import2.png" alt="">
      <img class="mx-8" src="/import3.png" alt="">
    </div>
  </Slide>
</template>

<script>
import Slide from '@/components/Slide'
import Code from '@/components/Code'

export default {
  components: {
    Slide,
    Code
  }
}
</script>

<style scoped>
img {
  max-height: 60vh;
}
</style>
