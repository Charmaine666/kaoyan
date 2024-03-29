import request from '../utils/request'

export function myCollect (id) {
  return request({
    url: '/mycollect',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      id
    }
  })
}
