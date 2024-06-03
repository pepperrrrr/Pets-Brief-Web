/* eslint-disable no-undef */
const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  //取消eslint校验
   lintOnSave: false,
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: "http://localhost:3000",
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '/api'
  //       }
  //     }
  //   }
  // },
  configureWebpack:(config) => {
    config.resolve = {
      //按照配置顺序尝试去找文件是否存在，如果全不存在，则报错；
      extensions: ['.js', '.json', '.vue'],
      //通过别名设置将原来导入路径映射成一个新的导入路径；
      alis: {
        '@': path.resolve(_dirname, './src')
      }
    }
  }
})
