import router from "@/router";
import { getUserInfo, removeUserInfo } from "@/utils/user"

const userInfo = getUserInfo()
router.beforeEach((to,from,next) =>{
  if(userInfo && userInfo.token){
    if(to.path === '/login'){
      next('/')
    }else{
      next()
    }
  }else{
    removeUserInfo()
    if(to.path === '/login'){
      next()
    }else{
      next('/login')
    }
  }
})