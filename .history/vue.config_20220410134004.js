const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false , //esLint끄기 
  devServer: {
    proxy: 'http://localhost:8080',
},
})
