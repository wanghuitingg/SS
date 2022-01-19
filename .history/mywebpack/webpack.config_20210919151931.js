const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode:"development",
    //入口文件的配置
    entry:path.resolve(__dirname,'src/index.js'),
    //出口文件的配置
    output:{
        path:path.join(__dirname, 'dist'),
        filename:'[name].js'
    },
    //模块：例如解读CSS，图片如何转换，压缩
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['MiniCExtractPlugin.loader','css-loader']
            }
        ]
    },
    //插件，用于生产模版和各项功能
    plugins:[
        new MiniCExtractPlugin({
            filename:'css/[name].css'
        }),
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        })
    ],
    // 配置webpack开发服务功能
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        host:"localhost",
        compress:true,
        port:8081,
        open:true
    }
}