import axios from 'axios'
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
const request = axios.create({
  baseURL: 'http://47.115.216.143:90/api'
  // headers: {'Content-Type': 'application/json;charset=utf-8'}
})

export default request
