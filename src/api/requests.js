// 二次封装axios
import store from "@/store";
import axios from "axios";
// 引入进度条
import nprogress from 'nprogress';
// 引入进度条样式
import 'nprogress/nprogress.css'

// 创建axios 实例
let requests = axios.create({
    // 基础路径
    baseURL:'/api',
    timeout:5000,
})

// 请求拦截器------在项目中请求发起前执行业务操作
requests.interceptors.request.use((config) =>{
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token;
    }

    nprogress.start();
    return  config;
})

// 响应拦截器------数据返回前执行业务操作
requests.interceptors.response.use(
    (res) =>{
        nprogress.done();
        return res.data;
    },
    (error) =>{
        // 服务器异常
    }
);

export default requests;