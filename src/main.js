import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import store from './store'

// 引入mockserve
import '@/mock/mockServe'
// 引入swiper样式文件
import 'swiper/css/swiper.css';

// 注册全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  // 全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  router,
  store
}).$mount('#app')
