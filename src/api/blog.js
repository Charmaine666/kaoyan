import request from '../utils/request'

export function getBlog (id) {
  // console.log(id)
  return request({
    url: '/blogs',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
