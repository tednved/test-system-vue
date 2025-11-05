<template>
  <el-container>
    <el-aside width="200px">
      <el-menu router default-active="/admin/users">
        <el-menu-item index="/admin/users">用户管理</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup></script>
