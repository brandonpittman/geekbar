<template>
  <Slide>
    <template slot="title">ご注意</template>
    <Code>
    @babel/plugin-syntax-dynamic-import

    npm install --save-dev @babel/plugin-syntax-dynamic-import
    </Code>
    <aside class="text-2xl text-blue-dark">Hello Worldのプロジェクトでも１６％早くなりそうです。</aside>
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
