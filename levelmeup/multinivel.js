const multilevel = require('multilevel')
const net = require('net')
module.exports = function (callback) {
  var db = multilevel.client()
  var con = net.connect(4545)
  con.pipe(db.createRpcStream()).pipe(con)
  db.get('multilevelmeup', function (err, value) {
    con.end(function () {
      callback(err, value)
    })
  })
}
