const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports={
    mode:"production",
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        }]
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
        static:{
            directory:path.resolve(__dirname,'dist')
        },
        host:"localhost",
        compress:true,
        port:8081,
        open:true
    }
}