import { reqCategoryList,reqGetBannerList ,reqGetFloorList} from "@/api"

const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]
}
const mutations = {
    getCategoryList(state,categoryList){
        state.categoryList = categoryList;
    },
    getBannerList(state,bannerList){
        state.bannerList = bannerList;
    },
    getFloorList(state,floorList){
        state.floorList = floorList;
    }
}
const actions = {
    async getCategoryList({commit}){
        let result = await reqCategoryList();
        if(result.code == 200){
            commit('getCategoryList',result.data);
        }        
    },
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        if(result.code == 200){
            commit('getBannerList',result.data);
        }
    },
    async getFloorList({commit}){
        let result = await reqGetFloorList();
        if(result.code == 200){
            commit('getFloorList',result.data);
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
