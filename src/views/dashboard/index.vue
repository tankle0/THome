<script lang="ts">
export default{
  name:'dashboard'
}
</script>

<script lang="ts" setup>

</script>

<template>
  <div class="dashboard">
    <h1>tank-首页</h1>
    <el-button type="primary" size="small">退出登录</el-button>
    <el-icon :size="80" color="#409EFC">
      <edit></edit>
    </el-icon>
    <el-icon>
      <camera-filled />
    </el-icon>
  </div>
</template>

<style scoped lang="scss">
.dashboard{
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>