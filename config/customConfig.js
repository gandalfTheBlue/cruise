// Please change the target API address to your real address
const devServerCustom = {
  proxy: {
    '/api/*': {
      secure: false,
      changeOrigin: true,
      target: 'http://192.168.199.31:7001',
      pathRewrite: { '^/api': '' },
    },
    '/api2/*': {
      secure: false,
      changeOrigin: true,
      target: 'ws://192.168.199.31:7011',
      pathRewrite: { '^/api2': '' },
    },
  },
  // port: 3001 
}

const hooksCustom = {
  exhaustiveDeps: false
}

const staticCustom = {
  publicPath: ''
}

module.exports = {
  devServerCustom,
  hooksCustom,
  staticCustom
}
