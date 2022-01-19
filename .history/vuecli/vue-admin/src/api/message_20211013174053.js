import request from '@/utils/request'

//获取接口信息
export function getMessage() {
    return request({
        url:"/showMessage",//接口地址
        method:"get"//请求方式
        // 如果有参数 get 是params  post 是data
    })
}