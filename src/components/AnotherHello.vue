<template>
  <h1>
    <slot>Hello again!</slot>
  </h1>
</template>

<script>
export default {
  data () {
    return {
      createdAt: null
    }
  },
  created () {
    this.createdAt = Date.now()
  }
}
</script>

<style scoped>
</style>
