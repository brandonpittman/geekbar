<template>
  <div
    id="app"
    @click="nextSlide">
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
export default {
  data () {
    return {
      totalSlides: 3,
      currentSlide: 0,
      slides: []
    }
  },
  methods: {
    nextSlide () {
      if (this.currentSlide < this.totalSlides) this.currentSlide++
    }
  },
  computed: {
    currentComponent () {
      if (this.currentSlide < this.totalSlides) {
        return this.slides[this.currentSlide]
      } else {
        return () => import('@/slides/TheEnd')
      }
    }
  },
  mounted () {
    for (let slide = 0; slide < this.totalSlides; slide++) {
      this.slides = [...this.slides, () => import(`@/slides/${slide}`)]
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
