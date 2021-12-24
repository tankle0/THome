<script lang="ts">
export default{
  name:"heads"
}
</script>

<script lang="ts" setup>

</script>

<template>
  <div class="head">
    <div class="logo">
      <el-icon color="yellow"><sunny /></el-icon>
    </div>
    <div class="user">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <el-icon color="#666"><avatar /></el-icon>
          <el-icon color="#666" class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item divided>首页</el-dropdown-item>
            <el-dropdown-item divided>个人中心</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
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
  }
}
</style>