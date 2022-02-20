<script lang="ts">
import { removeUserInfo } from '@/utils/user'
import { useRouter } from 'vue-router'
import { ElMessageBox, ElMessage } from 'element-plus'
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
export default defineComponent({
  name:"Header",
  computed:{
    ...mapGetters({
      name:'app/name'
    })
  }
})
</script>

<script lang="ts" setup>
const router = useRouter()
, loginOut = ()=>{
  ElMessageBox.confirm(
    '确认退出登录?',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
  .then(() => {
    removeUserInfo()
    router.push('/login')
    ElMessage({
      type: 'success',
      message: '退出登录成功',
    })
  })
  .catch(() => {})
}

</script>

<template>
  <div class="head">
    <div class="logo">
      <el-icon color="yellow"><sunny /></el-icon>
    </div>
    <div class="user">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <span>{{ name }}</span>
          <el-icon color="#666"><avatar /></el-icon>
          <el-icon color="#666" class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/">
              <el-dropdown-item >首页</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided>个人中心</el-dropdown-item>
            <el-dropdown-item @click="loginOut" divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    
  </div>
</template>

<style scoped lang="scss">

@keyframes rotate
{
  from {transform: rotate(0deg);}
  to {transform: rotate(359deg);}
}
.head{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo{
    .el-icon{
      font-size: 30px;
      animation: rotate 5s linear infinite;
    }
  }
  .user{
    cursor: pointer;
    &:hover{
      .el-icon{
        color: #333;
      }
    }
    .el-icon{
      font-size: 26px;
    }
    .el-icon--right{
      font-size: 20px;
    }
    .el-dropdown-link{
      display: flex;
      align-items: center;
      span{
        margin-right: 5px;
        font-weight: bold;
        color: black;
      }
    }
  }
}
</style>