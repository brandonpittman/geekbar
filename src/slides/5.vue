<template>
  <Slide>
    <h1 slot="title">ロード状態のハンドリング</h1>
    <Code>
      const AsyncComponent = () => ({
        component: import('./MyComponent.vue'),
        loading: LoadingComponent,
        error: ErrorComponent,
        delay: 200,
        timeout: 3000
      })
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
