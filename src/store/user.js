import { reqGetCode, reqUserRegister } from "@/api"

const state = {
    code:''
}
const mutations = {
    getCode(state,code){
        state.code = code;
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
    }
}
const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}