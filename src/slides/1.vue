<template>
  <Slide>
    <template slot="title">普通のインポート</template>
    <Code>
    import Something from '@/components/SomeFile'

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
