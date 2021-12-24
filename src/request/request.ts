import axios from "axios";

const instance = axios.create({
  baseURL:'/',
  headers:{
    "Content-Type":"application/json;charset=utf-8"
  }
})

//请求拦截器
instance.interceptors.request.use(config =>{
  return config.data
},(error)=>{
  return Promise.reject(error)
})

instance.interceptors.response.use(response=>{
  return response
},error=>{
  let msg = "";
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        msg = "客户端请求的语法错误，服务器无法理解";
        break;
      case 401:
        msg = "身份验证出错";
        // router.push({ name: "login" });
        break;
      case 403:
        msg = "您暂无此功能权限";
        // ElMessage.error(msg);
        break;
      case 404:
        msg = `请求地址出错:${error.response.config.url}`;
        break;
      case 405:
        msg = "请求方式被禁止";
        break;
      case 408:
        msg = "请求超时";
        break;
      case 500:
        msg = "服务器内部错误，无法完成请求";
        break;
      case 501:
        msg = "服务器不支持请求的功能，无法完成请求";
        break;
      case 502:
        msg =
          "作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应";
        break;
      case 503:
        msg =
          "由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中";
        break;
      case 504:
        msg = "充当网关或代理的服务器，未及时从远端服务器获取请求";
        break;
      case 505:
        msg = "服务器不支持请求的HTTP协议的版本";
        break;
      default:
        msg = `请求出错:${error.message}`;
    }
    msg = error.response.data.message || msg;
  } else {
    msg = "服务器连接失败";
  }
  return Promise.reject(error)
})

export default instance