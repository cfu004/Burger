var orm = require("../config/orm.js");

var model = {

  selectAll : function(callback)  {
    orm.selectAll("burgers", function(data) {
      callback(data);
    });
  },

  insertOne : function(burgerName, burgerDevoured, callback)  {
    orm.insertOne("burgers", burgerName, burgerDevoured, function(data) {
      callback(data);
    });
  },

  updateOne : function(burgerID, callback)  {
    orm.updateOne("burgers", burgerID, function(data) {
      callback(data);
    });
  }
};

module.exports = model;