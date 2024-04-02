import request from '../request'

/**
 * 公众号网页授权 token
 * @returns
 */
export function getWechatToken(params) {
  return request({
    method: 'get',
    url: '/eSaleWeb/miniProgram/getWebAccessToken',
    params
  })
}
