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
    <el-container class="main">
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-scrollbar>
          <el-aside>
            <SlideBar />
          </el-aside>
        </el-scrollbar>
        <el-main>
          <el-scrollbar>
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.home{
  height: 100%;
  .main{
    height: 100%;
    :deep(.el-menu){
      border: none;
      background-color: #fbfbfb;
    }
    .el-header{
      // background-image: linear-gradient(to right, #a8caba 0%, #5d4157 100%);
      // background-image: linear-gradient(to right, #ebc0fd 0%, #d9ded8 100%);
      // background: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%);
      // background-image: linear-gradient(to right, #a8edea 0%, #fed6e3 100%);
      // background-image: linear-gradient(to right, #ebbba7 0%, #cfc7f8 100%);
      // background-image: linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%);
      background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%);
    }
  
    .el-aside {
      width: 180px;
      background-color: #e6e6e6;
      overflow-x: hidden;
    }
  
    .el-main {
      padding: 10px;
      border-left: 1px solid #e6e6e6;
    }
  
    .el-container {
      height: calc(100% - 60px);
    }
  }
}
</style>