import request from './request'

export function queryUser(data) {
  return request('/request/user', 'POST', data)
}

//highlight示例使用的接口请求函数
export function queryHighlight(user) {
  return request('/highlight/user', 'POST', user)
}