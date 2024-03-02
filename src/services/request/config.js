// 原接口
// export const BASE_URL = "http://codercba.com:1888/airbnb/api"

// 使用代理解决在部署到Vercel上https网页发送http请求被阻止的问题
export const BASE_URL =
  'https://player-mixed-services.vercel.app/airbnb-proxy-api'
// export const BASE_URL = 'http://localhost:3068/airbnb-proxy-api'

export const TIMEOUT = 10000
