<template>
  <Slide>
  <template slot="title">ロード状態の例</template>
  <AsyncComponent/>
  </Slide>
</template>

<script>
import Slide from '@/components/Slide'
import Code from '@/components/Code'
import LoadingComponent from '@/components/Loading'
import ErrorComponent from '@/components/Error'

const AsyncComponent = () => ({
  component: import('@/components/ErrorSuccess'),
  loading: LoadingComponent,
  error: ErrorComponent,
  delay: 200,
  timeout: 0
})

export default {
  components: {
    Slide,
    Code,
    AsyncComponent
  }
}
</script>
