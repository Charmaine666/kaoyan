import request from '../utils/request'

// export function getSub (spe, acd, type) {
//   // console.log(id)
//   return request({
//     url: '/sub',
//     method: 'get',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     params: {
//       is_spe: spe,
//       is_acd: acd,
//       sub_type: type
//     }
//   })
// }

export function getSub (xw, ml, xk) {
  // console.log(id)
  return request({
    url: '/zy',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      is_spe: xw,
      sub_type: ml,
      select_xk: xk
    }
  })
}

export function getMl () {
  // console.log(id)
  return request({
    url: '/ml',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
export function getXk (ml, spe) {
  // console.log(id)
  return request({
    url: '/xk',
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      select_ml: ml,
      is_spe: spe
    }
  })
}
