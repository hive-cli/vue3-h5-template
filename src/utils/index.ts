export function sleep(timeout) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(null)
    }, timeout)
  })
}

export function getAssets(name) {
  return new URL(`/src/assets/${name}`, import.meta.url).href
}

export function getUrlQuery(url) {
  let params = url.split('?')[1]?.split('&')
  let obj = {}
  params?.forEach(v => (obj[v.split('=')[0]] = v.split('=')[1]))
  return obj
}
