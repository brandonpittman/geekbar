<template>
  <Slide>
    <template slot="title">モダンモード</template>
    <h2 class="text-blue mb-4">
      <code>vue-cli-service build --modern</code>
    </h2>
    <Code>
      <ul class="list-reset">
        <li class="mb-4"><code v-text="module"></code></li>
        <li class="mb-4"><code v-text="preload"></code></li>
        <li class="mb-4"><code v-text="nomodule"></code></li>
      </ul>
    </Code>
  </Slide>
</template>

<script>
import Slide from '@/components/Slide'
import Code from '@/components/Code'

export default {
  data () {
    return {
      module: '<script type="module">',
      preload: '<link rel="modulepreload">',
      nomodule: '<script nomodule>'
    }
  },
  components: { Slide, Code }
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
