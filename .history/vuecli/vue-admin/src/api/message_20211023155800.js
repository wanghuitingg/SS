import request from "../utils/request"

// 获取信息接口
export function getMessage(){
    return request({
        url:"/showMessage",//接口地址
        method:"get"//请求方式
        // 如果有参数 get 是params  post 是data
    })
}

// 添加信息接口
export function addMessage(data){
    return request({
        url:"/insertAllMessage",//接口地址
        method:"post",
        data//请求方式
        // 如果有参数 get 是params  post 是data
    })
}