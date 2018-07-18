<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <BigTextSlide slide-number="1">
      Something more interesting
    </BigTextSlide>
    <BigTextSlide slide-number="2">
      Something else interesting
    </BigTextSlide>

  </div>
</template>

<script>
const HelloWorld = () => import('@/components/HelloWorld')
const AnotherHello = () => import('@/components/AnotherHello')

export default {
  name: 'home',
  components: {
    HelloWorld,
    AnotherHello
  }
}
</script>
