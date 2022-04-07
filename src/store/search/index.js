import { reqGetSearchInfo } from "@/api"

const state = {
    searchInfo:{}
}
const mutations = {
    getSearchInfo(state,searchInfo){
        state.searchInfo = searchInfo;
    }
}
const actions = {
    async getSearchInfo({commit},params = {}){
        let result = await reqGetSearchInfo(params);
        if(result.code == 200){
            commit('getSearchInfo',result.data);
        }
    }
}
const getters = {
    goodsList(state){
        return state.searchInfo.goodsList;
    },
    trademarkList(state){
       return state.searchInfo.trademarkList;
   },
   attrsList(state){
       return state.searchInfo.attrsList;
   }

}


export default {
    state,
    mutations,
    actions,
    getters
}