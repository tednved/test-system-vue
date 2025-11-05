<template>
  <div style="text-align:center; margin-top:100px;">
    <h1>404 - 页面未找到</h1>
    <el-button type="primary" @click="$router.push('/home')">
      返回首页
    </el-button>
  </div>
</template>

<script setup></script>

<style scoped>
h1 {
  color: #999;
  font-weight: 400;
}
</style>
