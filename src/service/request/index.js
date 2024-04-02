import axios from 'axios'
import { showToast } from 'vant'

let defaultBaseURL = '/dev-api'
switch (import.meta.env.MODE) {
  case 'development':
    defaultBaseURL = '/dev-api'
    break
  case 'production':
    defaultBaseURL = '/prod-api'
    break
  default:
    defaultBaseURL = '/dev-api'
}
// axios.defaults.timeout = 1000 * 30
// // axios.defaults.withCredentials = true;

// axios.defaults.headers['Content-Type'] = 'application/json'

// axios.interceptors.request.use(
//   config => {
//     let token = localStorage.getItem('token')
//     token && (config.headers.Authorization = token)
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

// axios.defaults.validateStatus = status => {
//   return /^(2|3)\d{2}$/.test(status)
// }

// axios.interceptors.response.use(
//   response => {
//     const { data } = response
//     if (data?.code == 200) {
//       return data.data
//     }
//     if (data?.error_code == 0) {
//       return data.result
//     }
//     window.$message.error(data.msg)
//     return Promise.reject(data)
//   },
//   error => {
//     window.$message.error(error.message)
//     return Promise.reject(error)
//   }
// )

export function createRequest(baseURL) {
  let instance = axios.create({
    baseURL,
    timeout: 1000 * 30
  })
  instance.interceptors.request.use(
    config => {
      let token = localStorage.getItem('token')
      token && (config.headers.Authorization = token)

      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  instance.validateStatus = status => {
    return /^(2|3)\d{2}$/.test(status)
  }
  instance.interceptors.response.use(
    response => {
      const { data } = response
      if (data?.status == 0) {
        return data.obj
      }
      window.showToast.fail(data.msg)
      return Promise.reject(data)
    },
    error => {
      showToast(error)
      return Promise.reject(error)
    }
  )
  return instance
}

export default createRequest(defaultBaseURL)
