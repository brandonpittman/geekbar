<template>
  <Slide>
    <h1 slot="title">モダンモード</h1>
    <h2>
      <code>vue-cli-service build --modern</code>
    </h2>
    <ul>
      <li><code v-text="module"></code></li>
      <li><code v-text="preload"></code></li>
      <li><code v-text="nomodule"></code></li>
    </ul>
  </Slide>
</template>

<script>
import Slide from '@/components/Slide'
export default {
  data () {
    return {
      module: '<script type="module">',
      preload: '<link rel="modulepreload">',
      nomodule: '<script nomodule>'
    }
  },
  components: { Slide }
}
</script>

<style scoped>
h2 {
  font-size: 3rem;
}

li {
  font-size: 2rem;
}
</style>
