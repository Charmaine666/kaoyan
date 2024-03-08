import request from '../utils/request'

export function mygoodCount () {
  return request({
    url: '/mygood',
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'get'
  })
}
