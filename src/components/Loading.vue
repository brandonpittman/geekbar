<template>
  <Slide>
    <h1 slot="title">ローディング</h1>
  </Slide>
</template>

<script>
import Slide from '@/components/Slide'
export default {
  components: { Slide },
  mounted () {
    console.log('結構時間かかりました！')
  }
}
</script>

<style scoped>
h1 {
  background-color: rebeccapurple;
  color: white;
  text-align: center;
  border-radius: 10px;
  padding: 1rem;
}
</style>
