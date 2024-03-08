import request from '../utils/request'

export function myFollow (id) {
  return request({
    url: '/api/myFollow',
    method: 'get',
    params: {
      id
    }
  })
}
export function addFollow () {
  return request({
    url: '/api/addFollow',
    method: 'get'
  })
}

export function deleteFollow () {
  return request({
    url: '/api/deleteFollow',
    method: 'get'
  })
}

export function followAndFanCount () {
  return request({
    url: '/api/followAndCount',
    method: 'get'
  })
}

export function myFan (id) {
  return request({
    url: '/api/myfan',
    method: 'get',
    params: {
      id
    }
  })
}
