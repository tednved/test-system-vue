# 🧾 考试报名系统前端技术预研项目

## 📘 一、项目简介

本项目为考试报名信息管理系统的前端部分，主要用于技术预研阶段的框架搭建。  
目标是实现：

=======
本项目为考试报名信息管理系统的前端部分，主要用于技术预研阶段的框架搭建。  
目标是实现：

- 用户注册与登录  
- 权限管理（普通用户 / 管理员）  
- 管理员的用户增删改查  
- 前端页面风格与导航结构  
- Mock 后端接口  
- 后续支持 JavaEE 后端接入  

⚙️ 当前版本为 **Vue3 + Vite** 前端框架，可直接运行，无需后端即可演示。

---

## 🧱 二、技术栈

| 模块 | 技术 |
|------|------|
| 前端框架 | Vue 3 + Vite |
| 路由管理 | Vue Router 4 |
| 状态管理 | Pinia |
| UI 组件库 | Element Plus |
| 模拟后端 | 本地 Mock JS (`src/api/mockApi.js`) |
| 单元测试（建议） | Vitest + Vue Testing Library |

---

## 🚀 三、本地运行

```bash
# 克隆项目
git clone https://github.com/yourname/exam-system.git
cd exam-system

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

启动后访问：  
👉 [http://localhost:5173/](http://localhost:5173/)

默认页面：**登录页**

---

## 📁 四、目录结构

```
src/
├── App.vue
├── main.js
├── router/              # 前端路由
│   └── index.js
├── store/               # Pinia 状态管理
│   └── userStore.js
├── api/                 # 模拟后端接口
│   └── mockApi.js
└── components/          # 页面组件
    ├── Login.vue
    ├── Register.vue
    ├── Home.vue
    ├── Profile.vue
    ├── NavBar.vue
    ├── NotFound.vue
    └── admin/
        ├── AdminHome.vue
        └── UserManage.vue
```

---

## 🧩 五、功能说明

| 功能 | 描述 |
|------|------|
| 登录 / 注册 | 支持管理员或普通用户登录注册 |
| 权限管理 | 使用路由守卫判断角色权限 |
| 导航栏 | 根据角色显示不同菜单项 |
| 用户管理 | 管理员查看、删除用户 |
| Mock 接口 | 模拟登录、注册、查询、删除操作 |
| 404 页面 | 无效路由跳转提示页 |

---

## 🧭 六、编码规范与扩展方法

✅ **新增一个页面功能**

1. 在 `src/components/` 中创建新 `.vue` 文件  
   例如 `ExamList.vue`

2. 在 `src/router/index.js` 中注册新路由：

```js
{ path: '/exam/list', component: () => import('../components/ExamList.vue') }
```

3. 若页面需要调用后端接口，在 `src/api/` 新建文件：

```js
export const examApi = {
  getAll() { return fetch('/api/exams') },
  add(data) { return fetch('/api/exams', { method: 'POST', body: JSON.stringify(data) }) }
}
```

4. 在页面组件中使用 Pinia 获取当前用户信息：

```js
import { useUserStore } from '../store/userStore'
const store = useUserStore()
console.log(store.user.role)
```

---

## 🔐 七、权限管理机制说明

- 用户登录成功后，系统返回 `token` 与 `role`。  
  - `token`：用于模拟登录状态  
  - `role`：为 `'admin'` 或 `'user'`

- 前端在 `router.beforeEach()` 守卫中拦截路由访问：

```js
if (!token && to.path !== '/login') next('/login')
if (role !== 'admin' && to.path.startsWith('/admin')) next('/home')
```

- 导航栏根据角色动态显示不同菜单。

---

## 🧪 八、单元测试建议

**测试框架**：Vitest + Vue Testing Library  

安装依赖：

```bash
npm install -D vitest @testing-library/vue
```

示例测试文件：`src/tests/login.test.js`

```js
import { render, fireEvent } from '@testing-library/vue'
import Login from '../components/Login.vue'

test('renders login form and updates input', async () => {
  const { getByPlaceholderText } = render(Login)
  const input = getByPlaceholderText('请输入用户名')
  await fireEvent.update(input, 'admin')
  expect(input.value).toBe('admin')
})
```

运行测试：

```bash
npx vitest run
```

---

## ⚙️ 九、与 JavaEE 后端对接（后续）

当前使用 `src/api/mockApi.js` 作为本地模拟接口。  
后期对接 JavaEE 后端时，只需：

1. 替换 `mockApi.js` 内的接口调用为真实 API 请求；  
2. 在 JavaEE 提供的 REST 接口上设置：

   ```
   /api/login
   /api/register
   /api/users
   ```

3. 使用 Axios 或 Fetch：

```js
import axios from 'axios'
export const api = {
  login: (u, p) => axios.post('/api/login', { username: u, password: p })
}
```

---

## 🎨 十、UI 风格说明

- 所有页面基于 **Element Plus** 组件库；  
- 统一字体：**Microsoft YaHei**；  
- 简洁配色风格，支持后续主题自定义；  
- 管理端采用 **左侧菜单栏 + 主体内容布局**。

---

## 🧾 十一、提交与展示

预研阶段提交内容：

- ✅ 前端源代码（或压缩包 `exam-system.zip`）  
- ✅ README.md（即本文件）  
- ✅ 演示截图（建议：登录页、注册页、用户页、管理员页）  
- ⭕ 可选：本地运行视频（用于汇报）

---

## ✨ 十二、项目成员任务划分（建议）

| 模块 | 负责人 | 内容 |
|------|---------|------|
| 前端框架搭建 | 你（或前端主程） | Vue3 + Router + Pinia 初始化 |
| UI 风格设计 | 设计 / 前端 | Element Plus 样式统一 |
| 登录注册 | 前端 | Mock 模拟 + 表单验证 |
| 权限管理 | 前端 | 路由守卫 + 角色判断 |
| 后端接口设计 | JavaEE 组 | REST API 设计与文档 |
| 前后端联调 | 全组 | 替换 mockApi |

---

## ✅ 十三、运行截图示例（建议放在文档中）

| 页面 | 说明 |
|------|------|
| 登录页 | 用户输入账号密码登录 |
| 注册页 | 注册普通或管理员账号 |
| 用户首页 | 显示报名信息占位内容 |
| 管理员后台 | 用户管理表格，支持删除 |

---

## 📚 十四、结语

本项目为实训技术预研版，重点在于掌握前端框架搭建、权限体系实现与页面结构设计。  
正式开发阶段只需在此框架下添加业务逻辑与接口调用，即可快速迭代。
<<<<<<< HEAD
>>>>>>> 467d647 (基础框架内容创建)
=======
>>>>>>> 3fea20ac58eac5544a833c50648e71d0873c3de7
