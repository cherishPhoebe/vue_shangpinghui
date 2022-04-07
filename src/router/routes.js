
// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

export default [{
    path:'/home',
    component:Home,
    meta:{showFooter:true}
},{
    name:'search',
    path: '/search/:keyword?',
    component:Search,
    meta:{showFooter:true}
},{
    name:'detail',
    path:'/detail/:skuId',
    component:Detail,
    meta:{showFooter:true}
},{
    name:'addcartsuccess',
    path:'/addcartsuccess',
    component:AddCartSuccess
},{
    name:'shopcart',
    path:'/shopcart',
    component:ShopCart
},{
    path:'/login',
    component:Login,
    meta:{showFooter:false}
},{
    path:'/register',
    component:Register,
    meta:{showFooter:false}
},{
    path:'*',
    redirect:'/home',
    meta:{showFooter:true}
}]