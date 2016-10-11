var mysql = require('mysql');


module.exports = function()  {
  return {
    getMySQLConnection: function() {

      var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root", //Your username
        password: "", //Your password
        database: "burgers_db"
      });

      connection.connect(function(err) {
        if (err) throw err;
      });

      return connection;
    }
  }
}