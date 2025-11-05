import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../store/userStore'

import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Home from '../components/Home.vue'
import Profile from '../components/Profile.vue'
import AdminHome from '../components/admin/AdminHome.vue'
import UserManage from '../components/admin/UserManage.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/home', component: Home },
  { path: '/user/profile', component: Profile },
  {
    path: '/admin',
    component: AdminHome,
    children: [
      { path: 'users', component: UserManage }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useUserStore()
  const publicPages = ['/login', '/register']
  if (!store.token && !publicPages.includes(to.path)) {
    next('/login')
  } else if (to.path.startsWith('/admin') && store.user.role !== 'admin') {
    next('/home')
  } else {
    next()
  }
})

export default router
