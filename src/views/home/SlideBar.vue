<script lang="ts">
import { computed, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import MenuNav from './MenuNav.vue'
export default{
  name:'Slidebar'
}
</script>

<script lang="ts" setup>
const isCollapse = ref(false)
, route = useRoute()

//模拟后端返回路由格式
, menuObj = reactive({
  menuData:[
    {
      path:'/dashboard',
      meta:{
        title:'首页',
        icon:'HomeFilled'
      },
      children:[]
    },
    {
      path:'/system',
      meta:{
        title:'系统设置',
        icon:'Setting'
      },
      children:[
        {
          path:'/user',
          meta:{
            title:'用户设置',
            icon:'Male'
          },
          children:[]
        },
        {
          path:'/role',
          meta:{
            title:'角色设置',
            icon:'List'
          },
          children:[]
        },
        {
          path:'/menu',
          meta:{
            title:'菜单设置',
            icon:'Menu'
          },
          children:[]
        },
      ]
    },
    {
      path:'/books',
      meta:{
        title:'前端资料',
        icon:'FolderAdd'
      },
      children:[]
    },
    {
      path:'/base',
      meta:{
        title:'基础配置',
        icon:'Grid'
      },
      children:[
        {
          path:'/avatar',
          meta:{
            title:'头像设置',
            icon:'Operation'
          },
          children:[
            {
              path:'/avatar',
              meta:{
                title:'小头像设置',
                icon:'PictureFilled'
              },
            }
          ]
        },
        {
          path:'/msg',
          meta:{
            title:'个人信息',
            icon:'Headset'
          },
          children:[]
        }
      ]
    },
  ]
})
,activeMenu = computed(()=>{
  return route.path
})

</script>

<template>
  <div class="slideBar">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :unique-opened="true"
    >
      <MenuNav v-for="(item) in menuObj.menuData" :menu='item' :index="item.path" :key="item.path"></MenuNav>
    </el-menu>
  </div>
</template>
