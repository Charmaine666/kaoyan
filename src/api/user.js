import request from '../utils/request'

export function userInfo (id) {
  console.log(id)
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
    url: '/api/updateuser',
    method: 'get',
    params: {
      msg: data
    }
  })
}

export function myArticle (id) {
  return request({
    url: '/api/myarticle',
    method: 'get',
    params: {
      id
    }
  })
}
