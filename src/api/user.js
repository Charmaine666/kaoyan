import request from '../utils/request'

export function userInfo (id) {
  // console.log(id)
  return request({
    url: '/user',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      id: id
    }
  })
}

export function updateUser (data) {
  return request({
    url: '/updateuser',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      msg: data
    }
  })
}

export function myArticle (id) {
  return request({
    url: '/myarticle',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      id
    }
  })
}

export function Reg (account, password) {
  return request({
    url: '/reg',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      account,
      password
    }
  })
}
