// 接口请求函数模块
import jsonp from 'jsonp'
import ajax from './ajax';

// 登录
export const reqLogin = (username, password) => ajax('/api/login', {username, password}, 'post')

// jsonp请求天气
export const reqWeather = (city) => {
  return new Promise((resolve, reject) => {
    const url = `http://api.map.baidu.com/telematics/v3/weather?loaction=${city}&output=json&ak=g73ARZFq8Wl5UfM6qGhDpZSUlmyy3HBb`
    jsonp(url, {}, (err, data) => {
      if (err) throw err
      console.log(data)
      resolve(data)
    })
  })
}

// 请求商品列表
export const reqCategoryList = (parentId) => ajax('/api/category/list', {parentId})

// 更新分类
export const reqUpdateCategory = (data) => ajax('/api/category/update', {categoryId: data.categoryId, categoryName: data.categoryName}) 

// 添加分类
