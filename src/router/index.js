import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App,
    children: [{
      path: '',
      component: r => require.ensure([], () => r(require('../components/home')), 'home')
    }, {
      path: '/buy',
      component: r => require.ensure([], () => r(require('../components/buy')), 'buy')
    }]
  }
]
const router = new VueRouter({
  routes
})
export default router

