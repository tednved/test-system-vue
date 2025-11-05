<template>
  <div class="register">
    <el-card>
      <h2>注册新用户</h2>
      <el-form :model="form">
        <el-form-item label="用户名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="form.role" placeholder="选择角色">
            <el-option label="普通用户" value="user" />
            <el-option label="管理员" value="admin" />
          </el-select>
        </el-form-item>
        <el-button type="primary" @click="onRegister">注册</el-button>
        <el-button type="text" @click="$router.push('/login')">返回登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { mockApi } from '../api/mockApi'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
const form = reactive({ username: '', password: '', role: 'user' })

const onRegister = () => {
  mockApi.register(form.username, form.password, form.role)
    .then(() => {
      ElMessage.success('注册成功，请登录')
      router.push('/login')
    })
    .catch(err => ElMessage.error(err.msg))
}
</script>
