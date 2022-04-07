// 引入 Vue 和 VueX
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)

// 引入其他模块
import home from './home';
import search from './search';
import detail from './detail';
import shopcart from './shopcart';

export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        shopcart
    }
})