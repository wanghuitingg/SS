const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpackDevServer = require('webpack-dev-server');
module.exports={
    entry:{
        index:'./src/index.js'
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module:{

    },
    plugins:[
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname, 'dist'),
        host:"localhost",
        compress:true,
        port:8081
    }
}