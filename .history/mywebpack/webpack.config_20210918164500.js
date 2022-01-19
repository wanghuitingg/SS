const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
module.exports = {
    mode:"production",
    //入口文件的配置
    entry:{
        index:"./src/index.js"
    },
    //出口文件的配置
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    //模块：例如解读CSS，图片如何转换，压缩
    module:{

    },
    //插件，用于生产模版和各项功能
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        })
    ],
    //配置webpack开发服务功能
    devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        //服务器的IP地址,可以使用 localhost
        host:"localhost",
        //服务端压缩是否开启
        compress:true,
        //配置服务器端口
        port:8081
    }
}