import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes'
import store from ''
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
let router = new VueRouter({
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
      //返回的这个y=0，代表的滚动条在最上方
      return { y: 0 };
    },
})

router.beforeEach(async (to,from,next) =>{
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    // 如果已经登录了
    if(token){
        if(to.path == "/login" || to.path == "/register"){
            next("/");
        }else{
            if(name){
                next();
            }else{
                // 获取用户信息
                store.dispatch('getUserInfo').then(res =>{
                    if(res.code == 200){
                        next();
                    }else{
                        await store.dispatch('userLogout');
                        next('/login')
                    }
                }).catch(err =>{
                    //token失效从新登录
                    await store.dispatch('userLogout');
                    next('/login')
                });
            }
        }
    }else{
        next();
    }
});

export default router;
