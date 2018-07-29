<template>
  <Slide>
    <h1
      class="bg-purple text-5xl text-center text-white font-bold p-6 rounded"
      slot="title">
      ローディング
    </h1>
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
