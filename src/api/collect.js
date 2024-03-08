import request from '../utils/request'

export function myCollect (id) {
  return request({
    url: '/api/mycollect',
    method: 'get',
    params: {
      id
    }
  })
}
