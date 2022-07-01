// vue.config.js
const { defineConfig } = require('@vue/cli-service')



module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/' //為github的專案名稱
    : '/'
   }