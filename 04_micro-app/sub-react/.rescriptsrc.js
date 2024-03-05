module.exports = {
  devServer(config) {
    config.headers = {
      'Access-Control-Allow-Origin': '*'
    }
    return config
  }
}
