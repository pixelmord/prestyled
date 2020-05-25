
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prestyled.cjs.production.min.js')
} else {
  module.exports = require('./prestyled.cjs.development.js')
}
