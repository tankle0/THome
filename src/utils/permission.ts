import router from "@/router";
import { getUserInfo, removeUserInfo } from "@/utils/user"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

router.beforeEach((to,from,next) =>{
  NProgress.start()
  const userInfo = getUserInfo()
  if(userInfo && userInfo.token){
    if(to.path === '/login'){
      next('/')
    }else{
      next()
    }
    NProgress.done()
  }else{
    removeUserInfo()
    if(to.path === '/login'){
      next()
    }else{
      next('/login')
    }
    NProgress.done()
  }
})