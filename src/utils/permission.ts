import router from "@/router";
import { getUserInfo, removeUserInfo } from "@/utils/user"

router.beforeEach((to,from,next) =>{
  const userInfo = getUserInfo()
  if(userInfo && userInfo.token){
    if(to.path === '/login'){
      next('/')
    }else{
      next()
    }
  }else{
    console.log('notoken',to.path);
    removeUserInfo()
    if(to.path === '/login'){
      next()
    }else{
      next('/login')
    }
  }
})