import { createStore } from "vuex";
import app from './modules/app'
export const store = createStore({
  strict: import.meta.env.MODE !== 'production',
  state(){
    return{

    }
  },
  mutations:{

  },
  getters:{

  },
  modules:{
    app
  }
})