<template>
  <div
    class="
    flex
    justify-center
    items-center
    text-purple-darker
    h-screen"
    id="app">
    <component :is="currentComponent"/>
    <div
      class="absolute pin-r pin-b"
      id="slide-counter">{{ currentSlide }}/{{ totalSlides }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      totalSlides: 10,
      currentSlide: 0,
      slides: []
    }
  },
  methods: {
    previousSlide () {
      if (this.currentSlide > 0) this.currentSlide--
    },
    nextSlide () {
      if (this.currentSlide < this.totalSlides) this.currentSlide++
    }
  },
  computed: {
    currentComponent () {
      if (this.currentSlide < this.totalSlides) {
        return this.componentConstructor
      } else {
        return () => import('@/slides/TheEnd')
      }
    },
    componentConstructor () {
      const path = `./slides/${this.currentSlide}`
      return () => import(`${path}`)
    }
  },
  mounted () {
    window.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowLeft') {
        this.previousSlide()
      }
    })

    window.addEventListener('keyup', (e) => {
      if (e.key === 'ArrowRight') {
        this.nextSlide()
      }
    })

    window.addEventListener('keyup', (e) => {
      if (e.keyCode === 32) {
        this.nextSlide()
      }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
