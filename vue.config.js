const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false , //esLint끄기 
  devServer: {
    proxy: 'http://localhost:8080',
},
})
