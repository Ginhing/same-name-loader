var fs = require('fs')
var path = require('path')
var utils = require("loader-utils")

module.exports = function(content) {
  this.cacheable()
  var callback = this.async()

  var query = utils.parseQuery(this.query)
  var resPath = path.parse(this.resourcePath)

  var filename = resPath.name
  if (filename === 'index') {
    var asset = path.basename(resPath.dir) + '.' + query.ext || 'css'
    var self = this
    fs.access( path.join(resPath.dir, asset) , fs.R_OK, function(err) {
      if (!err) {
        content = 'require("./'+ asset +'")\n' + content
      }
      callback(null, content)
    })

  } else {
    callback(null, content)
  }
}