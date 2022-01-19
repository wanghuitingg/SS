import request from "../utils/request"

// 添加地址
export function addAddress(data) {
    return request({
        url:"/insertOneAddress",
        method:"post",
        data
    })
}