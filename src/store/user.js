import { reqGetCode, reqGetUserInfo, reqUserLogin, reqUserLogout, reqUserRegister } from "@/api"
import { getToken, removeToken, setToken } from "@/utils/token";

const state = {
    code:'',
    token:getToken(),
    userInfo:{}
}
const mutations = {
    getCode(state,code){
        state.code = code;
    },
    userLogin(state,token){
        state.token = token;
    },
    getUserInfo(state,userInfo){
        state.userInfo = userInfo;
    },
    userLogout(state){
        state.token = '';
        state.userInfo = {};
        removeToken();
    }
}
const actions = {
    async getCode({commit},phone){
        let result = await reqGetCode(phone);
        if(result.code == 200){
            commit("getCode",result.data);
        }
        return result
    },
    async userRegister({commit},data){
        return await reqUserRegister(data)
    },
    async userLogin({commit},data){
        let result = await reqUserLogin(data);
        if(result.code == 200){
            commit('userLogin',result.data.token)
            setToken(result.data.token);
        }
        return result;
    },
    async getUserInfo({commit}){
        let result = await reqGetUserInfo();
        if(result.code == 200){
            commit('getUserInfo',result.data);
        }
        return result;
    },
    async userLogout({commit}){
        let result = await reqUserLogout();
        if(result.code == 200){
            commit('userLogout');
        }
        return result;
    }
}
const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}