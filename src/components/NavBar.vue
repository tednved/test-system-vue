<template>
  <el-menu mode="horizontal" :default-active="active">
    <el-menu-item index="/home" @click="$router.push('/home')">首页</el-menu-item>
    <el-menu-item index="/user/profile" @click="$router.push('/user/profile')">个人中心</el-menu-item>
    <el-menu-item
      v-if="user.role === 'admin'"
      index="/admin/users"
      @click="$router.push('/admin/users')"
    >后台管理</el-menu-item>
    <el-menu-item index="logout" @click="logout">退出</el-menu-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '../store/userStore'

const router = useRouter()
const route = useRoute()
const store = useUserStore()

const user = computed(() => store.user)
const active = computed(() => route.path)

const logout = () => {
  store.logout()
  router.push('/login')
}
</script>

<style scoped>
.el-menu {
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
</style>
