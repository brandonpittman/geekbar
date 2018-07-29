<template>
  <div id="app">
    <component :is="currentComponent"></component>
    <div id="slide-counter">{{ currentSlide }}/{{ totalSlides }}</div>
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
body {
  margin: 0;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 5px);
  width: 100vw;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  border-top: 5px solid rebeccapurple;
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

#slide-counter {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
}
</style>
