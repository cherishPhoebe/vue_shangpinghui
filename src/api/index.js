import requests  from "./requests";
import mockRequests from './mockRequests';

export const reqCategoryList = () => requests.get(`/product/getBaseCategoryList`);

export const reqGetBannerList = () => mockRequests.get('/banner');

export const reqGetFloorList = () => mockRequests.get('/floor');

export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params});

// 获取商品详情
export const reqGetGoodInfo = (skuId) => requests({url:`/item/${skuId}`,method:'get'});

// 加入购物车
export const reqAddOrUpdateShopCart = (skuId,skuNum) => requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})

// 获取购物车列表数据
export const reqCartList = () => requests({url:`/cart/cartList`,method:'get'})

// 修改商品选中状态
export const reqUpdateCheckedById = (skuId,isChecked) => requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

// 删除购物车中商品
export const reqDeleteCartById = (skuId) => requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

// 获取验证码
export const reqGetCode = (phone) => requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

// 注册
export const reqUserRegister = (data) => requests({url:`/user/passport/register`,data,method:'post'})

// 登录
export const reqUserLogin = (data) => requests({url:`/user/passport/login`,data,method:'post'})

// 获取用户信息
export const reqGetUserInfo = () => requests({url:`/user/passport/auth/getuserinfo`,method:'get'})

// 退出登录
export const reqUserLogout = () => requests({url:`/user/passport/logout`,method:'get'})

// 获取用户收货地址信息
export const reqGetUserAddressList = () => requests({url:`/user/userAddress/auth/findUserAddressList`,method:'get'})

// 获取结算商品信息
export const reqOrderInfo = () => requests({url:`/order/auth/trade`,method:'get'})

// 提交订单
export const reqSubmitOrder = (tradNo,data) => requests({url:`/order/auth/submitOrder?tradNo=${tradNo}`,data,method:'post'})

// 获取支付信息
export const reqPayInfo = (orderId) => requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

// 获取支付订单状态
export const reqPayStatus = (orderId) => requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})

// 获取个人中心数据
export const reqMyOrderList = (page,limit) => requests({url:`/order/auth/${page}/${limit}`,method:'get'})
