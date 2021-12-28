interface userType {
  name:string,
  token:string
}

//设置用户信息
export const setUserInfo = function(obj:userType) :void{
  localStorage.setItem('userInfo',JSON.stringify({name:obj.name,token:obj.token}))
}
//获取用户信息
export const getUserInfo = function():userType {
  return JSON.parse(String(localStorage.getItem('userInfo')))
}
//移除用户信息
export const removeUserInfo = function():void {
  localStorage.clear()
}