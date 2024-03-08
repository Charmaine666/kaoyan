import request from '../utils/request'

export function getMsg (id) {
  // console.log(id)
  return request({
    url: '/baike',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      item_id: id
    }
  })
}
