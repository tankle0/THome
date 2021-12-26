<script lang="ts">
import { reactive, ref } from 'vue'
export default{
  name:'login'
}
</script>

<script lang="ts" setup>
const formObj = reactive(
  {
    name:'',
    password:''
  }
)
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
, form = ref(null)



/* 
  页面用到的方法
*/


function doLogin(name:String,password:String):void{
  let params = {
    name,
    password
  }
}
</script>

<template>
  <div class="login">
    <div class="loginBox">
      <el-form ref="form" :model="formObj" :rules="rules" label-width="120px">
        <el-form-item label="用户名:" prop="name">
          <el-input class="ipt" v-model="formObj.name"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input class="ipt" v-model="formObj.password"></el-input>
        </el-form-item>
        <el-form-item label="" >
          <el-button @click="doLogin(formObj.name,formObj.password)" class="loginBtn" type="primary" round>登 录</el-button>
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
    .ipt{
      width: 200px;
    }
    .loginBtn{
      width: 100%;
    }
  }
}
</style>