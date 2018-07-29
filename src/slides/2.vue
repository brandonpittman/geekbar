<template>
  <Slide>
    <template slot="title">変数としてインポート</template>
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
