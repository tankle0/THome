<script lang="ts">
import { reactive, ref, getCurrentInstance } from 'vue'
import { setUserInfo } from '@/utils/user'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import type { ElForm } from 'element-plus'
import { useStore } from 'vuex'
export default{
  name:'Login'
}
</script>

<script lang="ts" setup>
type FormInstance = InstanceType<typeof ElForm>
const formObj = reactive(
  {
    name:'',
    password:''
  }
)
, router = useRouter()
, store = useStore()
, rules = reactive(
  {
    name:[
      {
        required:true,
        message:'请输入用户名',
        trigger: 'blur'
      },
    ],
    password:[
      {
        required:true,
        message:'请输入密码',
        trigger:'blur'
      }
    ]
  }
)

// , {ctx}:any = getCurrentInstance()
, form = ref<FormInstance>()


/* 
  页面用到的方法
*/

function doLogin(formEl: FormInstance | undefined){
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      let params = {
        name:formObj.name,
        password:formObj.password
      },token = Math.random() + ''
      setUserInfo({name:formObj.name,token})
      ElMessage({
        message:'登录成功',
        type:'success'
      })
      setTimeout(()=>{
        router.push('/')
      },300)
    } else {
      return false
    }
  })
}
</script>

<template>
  <div class="login">
    <div class="loginBox">
      <h1>Vue3 + Vite + TypeSctipt <br /> 后台管理系统模板</h1>
      <el-form ref="form" :model="formObj" :rules="rules" label-width="120px">
        <el-form-item label="用户名:" prop="name">
          <el-input class="ipt" v-model="formObj.name" placeholder="请输入用户名" :clearable="true"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input class="ipt" @keyup.enter="doLogin(form)" v-model="formObj.password" type="password" :show-password="true" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="" >
          <el-button @click="doLogin(form)" class="loginBtn" type="primary" round>登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login{
  width: 100%;
  height: 100%;
  position: relative;
  // background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  // background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);
  // background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
  // background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);
  .loginBox{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 400px;
    height: 300px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    h1{
      width: 100%;
      text-align: center;
      font-size: 20px;
    }
    .ipt{
      width: 200px;
    }
    .loginBtn{
      width: 100%;
    }
  }
}
</style>