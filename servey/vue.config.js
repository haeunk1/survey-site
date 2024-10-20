const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },  // '/api' 경로를 백엔드 요청에서 제거
        secure: false
      }
    }
  }
})
