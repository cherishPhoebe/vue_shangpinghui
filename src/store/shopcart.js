import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";

const state ={
    cartList:[]
};
const mutations = {
    getCartList(state,cartList){
        state.cartList = cartList
    }
};
const actions = {
    async getCartList({commit}){
        let result = await reqCartList();
        if(result.code == 200){
            commit("getCartList",result.data);
        }
    },
    async deleteCartById({commit},skuId){
        await reqDeleteCartById(skuId);
    },
    async deleteAllCheckedCart({dispatch,getters}){
        let promiseAll = [];
        getters.cartList.cartInfoList.forEach(item =>{
            if(item.isChecked == 1){
                let promise = dispatch('deleteCartById',item.skuId);
                promiseAll.push(promise);
            }
        });
        return Promise.all(promiseAll);
    },
    async updateCheckedById({commit},{skuId,isChecked}){
        await reqUpdateCheckedById(skuId,isChecked);
    },
    async updateAllCartIsChecked({dispatch,state},isChecked){
        let promiseAll = [];
        state.cartList[0].cartInfoList.forEach(item => {
            let promise = dispatch('updateCheckedById',{skuId:item.skuId,isChecked:isChecked});
            promiseAll.push(promise);
        });
        return Promise.all(promiseAll);
    }
};
const getters = {
    cartList(state){
        return state.cartList[0] || {};
    }
};

export default{
    state,
    mutations,
    actions,
    getters
}