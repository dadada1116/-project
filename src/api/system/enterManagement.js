import request from '@/utils/request'

// 合同类型
export function htLx(data) {
  return request({
    url: '/ParamsController/getParamValuesByCodes.do',
    method: 'post',
    data: data
  })
}
export function getRecommend(data) {
  return request({
    url: '/CompanyController/getRecommend.do',
    method: 'post',
    data: data
  })
}
export function getExport(data) {
  return request({
    url: '/ExcelExportController/exportParams.do',
    method: 'post',
    data: data
  })
}
