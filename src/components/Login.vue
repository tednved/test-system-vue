<template>
  <div class="login">
    <el-card class="login-card">
      <h2>考试报名系统登录</h2>
      <el-form :model="form" @submit.prevent>
        <el-form-item label="用户名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-button type="primary" @click="onLogin">登录</el-button>
        <el-button type="text" @click="$router.push('/register')">注册</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { mockApi } from '../api/mockApi'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/userStore'
import { ElMessage } from 'element-plus'

const router = useRouter()
const store = useUserStore()
const form = reactive({ username: '', password: '' })

const onLogin = () => {
  mockApi.login(form.username, form.password)
    .then(res => {
      store.login(res.data, res.token)
      ElMessage.success('登录成功')
      if (res.data.role === 'admin') router.push('/admin')
      else router.push('/home')
    })
    .catch(err => ElMessage.error(err.msg))
}
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.login-card {
  width: 360px;
}
</style>
