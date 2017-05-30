// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import mockapi from '@/mockApi.js'
import Mint from 'mint-ui'
import ElementUI from 'element-ui'
Vue.use(Mint)
Vue.use(ElementUI)
import 'mint-ui/lib/style.css'
Vue.use(mockapi)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
