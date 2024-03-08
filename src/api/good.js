import request from '../utils/request'

export function mygoodCount () {
  return request({
    url: '/api/mygood',
    method: 'get'
  })
}
