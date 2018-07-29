<template>
  <Slide>
    <h1 slot="title">変数としてインポート</h1>
    <Code>
      const Something = () => import('@/components/SomeFile')

      export default {
        components: {
          Something
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
