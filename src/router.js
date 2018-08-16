import Vue from 'vue'
import Router from 'vue-router'
const App = () => import('@/App')
const About = () => import('@/views/About.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
