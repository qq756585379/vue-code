// https://juejin.im/post/5be54e04f265da611c267b19
import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import router from './router'
import store from './store'
// 导入 300毫秒点击事件延迟问题
import fastClick from 'fastclick'
import '@/common/stylus/border.css'
import '@/common/stylus/iconfont.css'
import '@/common/stylus/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
