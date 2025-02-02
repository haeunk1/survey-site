const { defineConfig } = require('@vue/cli-service')
const path = require('path');
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
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // 기본 @ 별칭 (src 폴더)
        '@components': path.resolve(__dirname, 'src/components'),
        '@assets': path.resolve(__dirname, 'src/assets'), 
        '@api': path.resolve(__dirname, 'src/api'), 
      }
    }
  }
})
