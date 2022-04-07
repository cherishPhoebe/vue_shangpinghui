import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes'

// 使用路由组件
Vue.use(VueRouter)

// 重写push 和 replace 方法
//需要重写VueRouter.prototype原型对象身上的push|replace方法
//先把VueRouter.prototype身上的push|replace方法进行保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}

VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
}


// 配置路由
export default new VueRouter({
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
      //返回的这个y=0，代表的滚动条在最上方
      return { y: 0 };
    },
})
