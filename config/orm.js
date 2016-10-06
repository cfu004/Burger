var connection = require('./connection.js');

// ORM 
// =============================================================

var tableName = "burgers";

var orm = {

	// Here our ORM is creating a simple method for performing a query of the entire table.
	// We make use of the callback to ensure that data is returned only once the query is done.
	selectAll: function(callback){
		var s = 'SELECT * FROM ' + tableName;

		connection.query(s, function(err, result) {
	 
            callback(result);

        });
	},

	// Here our ORM is creating a simple method for performing a query of a single character in the table.
	// Again, we make use of the callback to grab a specific character from the database. 

	updateOne: function(name, callback){
		var s = 'UPDATE ' + tableName + ' SET burger_name =?, burger_name=? where id=?';

		connection.query(s,[name.body.burger_name,name.params.id], function(err, result) {
	 
            callback(result);
        });

	},

	// Here our ORM is creating a simple method for adding characters to the database
	// Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement. 

	insertOne: function(burger, callback){

		// Creating a routeName so its easy to search. 
		var routeName = burgerer.name.replace(/\s+/g, '').toLowerCase();
		console.log(routeName);

		var s = "INSERT INTO " + tableName + " (burger_name) VALUES (?)";

		connection.query(s,[burger.body.burger_name,burger.params.id], function(err, result) {
            
            callback(result);

        });

	}


};

module.exports = orm;