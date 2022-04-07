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

