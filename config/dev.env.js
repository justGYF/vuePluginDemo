var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MOCK_URL: '"http://127.0.0.1:8083/mockjsdata/4/"'
})
