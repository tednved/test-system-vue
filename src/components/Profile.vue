<template>
  <div class="profile">
    <el-card>
      <h2>个人中心</h2>
      <el-descriptions :column="1">
        <el-descriptions-item label="用户名">{{ user.username }}</el-descriptions-item>
        <el-descriptions-item label="角色">{{ user.role }}</el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '../store/userStore'
const store = useUserStore()
const user = computed(() => store.user)
</script>
