const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
CE
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
        rules:[
            {
                test:/\.css$/i,
                use:['MiniCssExtractPlugin.loader','css-loader']
            }
        ]
    },
    //插件，用于生产模版和各项功能
    plugins:[
        new MiniCssExtractPlugin({
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