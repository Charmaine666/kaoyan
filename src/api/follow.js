import request from '../utils/request'

export function myFollow (id) {
  return request({
    url: '/myFollow',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      id
    }
  })
}
export function addFollow () {
  return request({
    url: '/addFollow',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function deleteFollow () {
  return request({
    url: '/deleteFollow',
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'get'
  })
}

export function followAndFanCount () {
  return request({
    url: '/followAndCount',
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'get'
  })
}

export function myFan (id) {
  return request({
    url: '/myfan',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      id
    }
  })
}
