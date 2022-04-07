const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭ESLINT校验工具
  lintOnSave: false,
  devServer:{
    proxy:{
      '/api':{
        target:'http://39.98.123.211'
      }
    }
  }
})
