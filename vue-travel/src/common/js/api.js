import http from './http'
import config from '../../../config'

const prod = process.env.NODE_ENV === 'production'
const staticPath = prod ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory
const homeData = staticPath + '/data/data.json'
const detailData = staticPath + '/data/detail.json'
const cityData = staticPath + '/data/city.json'

export const getHomeData = (params) => {
  return http.fetchGet(homeData)
}

export const getDetailData = (params) => {
  return http.fetchGet(detailData)
}

export const getCityData = (params) => {
  return http.fetchGet(cityData)
}
