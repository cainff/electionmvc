var mysql = require('mysql');       

module.exports = {
    connection : function(){
    return mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port     : '/Applications/MAMP/tmp/mysql/mysql.sock',
  database : 'election'
    })
},
    query : function (_q, cb){
         var _c = this.connection();

          _c.connect();
          _c.query(_q, function(err, rows, fields) {
          if (err) throw err;
          cb(rows);
    });
        _c.end();
    }
}