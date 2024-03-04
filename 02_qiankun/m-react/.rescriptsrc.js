module.exports = {
  webpack(config) {
    config.output.libraryTarget = 'umd'
    config.output.library = 'm-react'
    return config
  },
  devServer(config) {
    config.headers = {
      'Access-Control-Allow-Origin': '*'
    }
    return config
  }
}
