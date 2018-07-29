<template>
  <Slide>
      <h1 slot="title">コード分割</h1>
      <div class="images">
        <img src="/import1.png" alt="">
        <img src="/import2.png" alt="">
        <img src="/import3.png" alt="">
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
.images {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  display: block;
  padding: 2rem;
  max-height: 60vh;
}
</style>
