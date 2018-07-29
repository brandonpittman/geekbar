<template>
  <Slide>
    <h1 slot="title">ロード状態の例</h1>
    <AsyncComponent/>
  </Slide>
</template>

<script>
import Slide from '@/components/Slide'
import Code from '@/components/Code'
import LoadingComponent from '@/components/Loading'
import ErrorComponent from '@/components/Error'

const AsyncComponent = () => ({
  component: import('@/components/Success'),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 0,
  timeout: 9000
})

export default {
  components: {
    Slide,
    Code,
    AsyncComponent
  }
}
</script>
