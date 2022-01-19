const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCExtractPlugin = require('mini-css-extract-plugin');

module.exports={
    mode:"production",
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        publicPath:"http://localhost:8081/"
    },
    module:{
        rules:[
            {
            test:/\.css$/i,
            use:[MiniCExtractPlugin.loader,'css-loader']
            },{
                test:/\.scss$/,
                use:[
                    MiniCExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },{
                test:/\.(jpg|png|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:8192,
                        outputPath:'images/',
                        publicPath: "../dist/images/"
                    }
                }]
            }
        ]
    },
    plugins:[
        new MiniCExtractPlugin({
            filename:"css/[name].css"
        }),
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