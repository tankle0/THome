<script lang="ts">
export default{
  name:'MenuItem'
}
</script>

<script lang="ts" setup>
const props = defineProps({
  menu:{
    type:Object,
    required: true
  },
  index:{
    type: String,
    required:true
  }
})

</script>

<template>
  <router-link :to="props.menu.path" v-if="!(props.menu.children && props.menu.children.length)">
    <el-menu-item :index="props.menu.path" >
      <el-icon>
        <component :is="props.menu.meta.icon"></component>
      </el-icon>
      <template #title>
        <span>{{props.menu.meta.title}}</span>
      </template>
    </el-menu-item>
  </router-link>
  <el-sub-menu v-else :index="props.index">
    <template #title>
      <el-icon>
        <component :is="props.menu.meta.icon"></component>
      </el-icon>
      <span>{{props.menu.meta.title}}</span>
    </template>
    <MenuNav v-for="(m,n) in props.menu.children" :menu='m' :index="props.menu.path + '-' + n" :key="m.path"></MenuNav>
  </el-sub-menu>
</template>
