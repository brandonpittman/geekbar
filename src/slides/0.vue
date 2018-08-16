<template>
  <Slide>
    <template slot="title">非同期コンポーネントとVue.js</template>
    <aside class="text-4xl mt-8">ピットマン・ブランドン</aside>
    <div class="flex justify-between mt-4">
      <span class="text-4xl text-blue">@brandonpittman</span>
        <span class="text-2xl text-red m-2">三菱電機エンジニアリング</span>
    </div>
  </Slide>
</template>

<script>
import Slide from '@/components/Slide'

export default {
  components: {
    Slide
  }
}
</script>
