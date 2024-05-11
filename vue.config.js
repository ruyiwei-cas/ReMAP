const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    // 基本路径
    publicPath: './',
    //assetsDir: 'static',
    // 输出文件目录
    outputDir: 'dist',
    configureWebpack: {
        externals: {}
    },
    transpileDependencies: true,
    lintOnSave: false
})