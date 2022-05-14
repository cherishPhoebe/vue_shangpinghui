import { reqGetUserAddressList, reqOrderInfo } from "@/api"

const state =  {
    userAddressList:[],
    orderInfo:{}
}
const mutations = {
    getUserAddressList(state,userAddressList){
        state.userAddressList = userAddressList;
    },
    getOrderInfo(state,orderInfo){
        state.orderInfo = orderInfo;
    }
}
const actions = {
    async getUserAddressList({commit}){
        let result = await reqGetUserAddressList();
        if(result.code == 200){
            commit('getUserAddressList',result.data);
        }
    },
    async getOrderInfo({commit}){
        let result = await reqOrderInfo();
        if(result.code == 200){
            commit('getOrderInfo',result.data);
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}