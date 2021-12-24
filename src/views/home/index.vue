<script lang="ts">
import Header from '@/views/home/Header.vue'
import SlideBar from '@/views/home/SlideBar.vue'
export default{
  name:'home'
}
</script>

<script lang="ts" setup>
// console.log(import.meta.env);
</script>

<template>
  <div class="home">
    <!-- <h1>home</h1> -->
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <SlideBar />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.home{
  height: 100%;
  .el-header{
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
    text-align: center;
  }

  .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    padding: 10px;
  }

  .el-container {
    height: 100%;
  }
}
</style>