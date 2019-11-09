// 接口请求函数模块
import ajax from './ajax';

// 登录
export const reqLogin = (username, password) => ajax('/login', {username, password}, 'post')
