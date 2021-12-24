import request from '../request'
import { loginType } from '@/types/login'
import { AxiosPromise } from 'axios'

function doLogin(data:loginType):AxiosPromise{
  return request({
    url:'/api/login',
    method:'post',
    data:data
  })
}

export {
  doLogin
}