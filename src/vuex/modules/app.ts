import { getUserInfo } from "@/utils/user"

const state = {
  user:"12"
}

, mutations = {

}
, actions = {

}
, getters = {
  name:(state:any)=>{
    return getUserInfo()?.name
  }
}

export default{
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}