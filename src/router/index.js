import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
import Home from '../page/home.vue'
// 买
import Buy from '../page/buy.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/buy',
    component: Buy
  },
  {
    path: '/*',
    redirect: '/'
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router

