import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

let requests = axios.create({
    baseURL:'/mock',
    timeout:5000
});

//请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情
requests.interceptors.request.use((config) => {
    //现在的问题是config是什么?配置对象
    //可以让进度条开始动
    nprogress.start();
    return config;
  });
  
  //响应拦截器----当服务器手动请求之后，做出响应（相应成功）会执行的
  requests.interceptors.response.use(
    (res) => {
      //进度条结束
      nprogress.done();
      //相应成功做的事情
      return res.data;
    },
    (err) => {
      alert("服务器响应数据失败");
    }
  );
  //最终需要对外暴露（不对外暴露外面模块没办法使用）
  //这里的代码是暴露一个axios实例
  export default requests;
  
