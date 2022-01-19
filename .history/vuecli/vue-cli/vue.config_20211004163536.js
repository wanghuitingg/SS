module.exports={
    configureWebpack:{

    },
    devServer: {
        public: require('os').networkInterfaces()[Object.keys(require('os').networkInterfaces())[0]][1].address + ':8080',
        disableHostCheck: true
      }
}