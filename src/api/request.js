import axios from 'axios'

const URL = process.env.NODE_ENV === 'development' ?
    'http://localhost:5400' : 'http://localhost:5400'

//导出定义的request功能函数
export default function request(url, method = 'GET', data) {
  let promise
  return new Promise((resolve, reject) => {
    if (method === 'GET') {
      promise = axios.get(URL + url, {
        params: data
      })
    } else if (method === 'POST') {
      promise = axios.post(URL + url, data)
    }
    promise
        .then(response => {
          //将真正的数据作为Promise对象成功的值
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
  })
}
