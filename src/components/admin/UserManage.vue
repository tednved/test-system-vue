<template>
  <div>
    <el-button type="primary" @click="load">刷新用户</el-button>
    <el-table :data="users" stripe style="margin-top: 20px">
      <el-table-column prop="id" label="ID" width="80"/>
      <el-table-column prop="username" label="用户名"/>
      <el-table-column prop="role" label="角色"/>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button size="small" type="danger" @click="remove(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { mockApi } from '../../api/mockApi'
import { ElMessage } from 'element-plus'

const users = ref([])
const load = () => mockApi.getUsers().then(res => users.value = res)
const remove = (id) => {
  mockApi.deleteUser(id).then(() => {
    ElMessage.success('删除成功')
    load()
  })
}
onMounted(load)
</script>
