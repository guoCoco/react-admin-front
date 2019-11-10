const USER_KEY = 'user_key'

export default {
  // 获取用户信息
  getUser() {
    return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
  },
  // 存储数据信息
  setUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  },
  // 删除数据信息
  removeUser() {
    localStorage.removeItem(USER_KEY)
  }
}