import request from '../utils/request'

export function colInfo (area, type, special) {
  return request({
    url: '/colInfo',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      area,
      type,
      special
    }
  })
}
