<template>
  <Slide>
    <h1 slot="title">ご注意</h1>
    <Code>
    @babel/plugin-syntax-dynamic-import

    npm install --save-dev @babel/plugin-syntax-dynamic-import
    </Code>
    <aside>Hello Worldのプロジェクトでも１６％早くなりそうです。</aside>
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
