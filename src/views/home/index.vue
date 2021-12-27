<script lang="ts">
export default{
  name:'home'
}
</script>

<script lang="ts" setup>
import Header from '@/views/home/Header.vue'
import SlideBar from '@/views/home/SlideBar.vue'
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
            <router-view v-slot="{Component}">
              <transition name="slide-fade">
                <keep-alive :include="['dashboard']">
                  <component :is="Component" />
                </keep-alive>
              </transition>
            </router-view>
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
 .slide-fade-enter-active {
    transition: all 0.2s ease-out;
    opacity: 0.1;
  }

  .slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(50px) scale(.5);
    opacity: 0;
  }
}
</style>