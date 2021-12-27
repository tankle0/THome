<script lang="ts">
import { Router, useRouter } from 'vue-router';
export default{
  name:'404'
}
</script>

<script lang="ts" setup>
const router:Router = useRouter()
</script>

<template>
  <div class="notFound">
    <el-result
        icon="error"
        title="页面被外星人劫走了~"
        sub-title=""
      >
        <template #extra>
          <el-button type="primary" size="medium" @click="router.push('/')">返回首页</el-button>
        </template>
    </el-result>
  </div>
</template>

<style scoped lang="scss">
.notFound{
  padding-top: 80px;
}
</style>