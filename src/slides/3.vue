<template>
  <Slide>
    <h1 slot="title">オブジェクトの中でインポート</h1>
    <Code>
      export default {
        components: {
          Something: () => import('@/components/SomeFile')
        }
      }
    </Code>
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
