/**
 *  异步请求模块
 *  封装错误处理
 * */ 
import axios from 'axios'
import { message } from 'antd'

export default function ajax(url, data = {}, method = 'get') {
  return new Promise((resolve, reject) => {
    let promise
    if (method === 'get') {
      promise = axios.get(url, {
        params: data
      })
    } else if (method === 'post') {
      promise = axios.post(url, data)
    }
    promise.then(res => {
      resolve(res.data)
    }).catch(err => {
      message.error('请求异常：' + err.message)
    })
  })
}