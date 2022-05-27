var mysql = require('mysql');
var conn = mysql.createConnection({
  host: '127.0.0.1', 
  user: 'root', 
  password: 'yashodha2021',  
  database: 'tms' 
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
