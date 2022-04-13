import { reqGetCode, reqUserLogin, reqUserRegister } from "@/api"
import { getToken, setToken } from "@/utils/token";

const state = {
    code:'',
    token:getToken()
}
const mutations = {
    getCode(state,code){
        state.code = code;
    },
    userLogin(state,token){
        state.token = token
    }
}
const actions = {
    async getCode({commit},phone){
        let result = await reqGetCode(phone);
        if(result.code == 200){
            commit("getCode",result.data);
        }
    },
    async userRegister({commit},data){
        await reqUserRegister(data)
    },
    async userLogin({commit},data){
        let result = await reqUserLogin(data);
        if(result.code == 200){
            commit('userLogin',result.data.token)
            setToken(result.data.token);
        }
    }
}
const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}