import { reqAddOrUpdateShopCart, reqGetGoodInfo } from "@/api"
import { getUUID } from "@/utils/uuid_token";

const state = {
    goodInfo:{},
    uuid_token:getUUID()
}
const mutations = {
    getGoodInfo(state,goodInfo){
        state.goodInfo = goodInfo;
    }
}
const actions = {
    async getGoodInfo({commit},skuId){
        let result = await reqGetGoodInfo(skuId);
        if(result.code == 200){
            commit("getGoodInfo",result.data);
        }
    },
    async addOrUpdateShopCart({ commit },{skuId,skuNum}){
        await reqAddOrUpdateShopCart(skuId,skuNum)
    }
}
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    },
    //产品售卖属性的简化
    spuSaleAttrList(state) {
      return state.goodInfo.spuSaleAttrList || [];
    },

}


export default {
    state,
    mutations,
    actions,
    getters
}