import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
import Home from '../page/home.vue'
// 买
import Buy from '../page/Buy.vue'
// 买详情页
import Buydetail from '../page/Buydetail.vue'
// 卖详情页
import Selldetail from '../page/Selldetail.vue'
// 找工人详情页
import Employdetail from '../page/Employdetail.vue'
// 找工作详情页
import Jobdetail from '../page/Jobdetail.vue'
// 发布页
import Publish from '../page/Publish.vue'
// 我要买发布页
import Publishbuy from '../page/Publishbuy.vue'
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
    path: '/buydetail',
    component: Buydetail
  },
  {
    path: '/selldetail',
    component: Selldetail
  },
  {
    path: '/employdetail',
    component: Employdetail
  },
  {
    path: '/jobdetail',
    component: Jobdetail
  },
  {
    path: '/Publish',
    component: Publish
  },
  {
    path: '/Publishbuy',
    component: Publishbuy
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

