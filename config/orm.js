var dbconnection = require('./connection.js')().getMySQLConnection();

var orm = {
  
    selectAll : function(tableName, callback)  {
      dbconnection.query("select * from " + tableName, function(err, data)  {
        if (err) throw err;
        callback(data);
      });
    },

    insertOne : function(tableName, burgerName, burgerDevoured, callback) {
      dbconnection.query("insert into " + tableName + " (burger_name, devoured) values (?, ?)", [burgerName, burgerDevoured], function(err, data) {
        if (err) throw err;
        callback(data);
      });
    },

    updateOne : function(tableName, burgerID, callback) {
      dbconnection.query("update " + tableName + " set devoured = 1 where id = " + burgerID, function(err, data)  {
        if (err) throw err;
        callback(data);
      });
    }
  
};

module.exports = orm;