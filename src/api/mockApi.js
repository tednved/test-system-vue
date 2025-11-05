const users = [
  { id: 1, username: 'admin', password: '123456', role: 'admin' },
  { id: 2, username: 'user1', password: '123456', role: 'user' }
]

export const mockApi = {
  login(username, password) {
    const user = users.find(u => u.username === username && u.password === password)
    if (user) return Promise.resolve({ code: 0, token: 'mock-token', data: user })
    return Promise.reject({ code: 1, msg: '用户名或密码错误' })
  },
  register(username, password, role) {
    const exists = users.find(u => u.username === username)
    if (exists) return Promise.reject({ msg: '用户已存在' })
    const newUser = { id: Date.now(), username, password, role }
    users.push(newUser)
    return Promise.resolve({ code: 0, msg: '注册成功' })
  },
  getUsers() {
    return Promise.resolve(users)
  },
  deleteUser(id) {
    const index = users.findIndex(u => u.id === id)
    if (index > -1) users.splice(index, 1)
    return Promise.resolve({ code: 0 })
  }
}
