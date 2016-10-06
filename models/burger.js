var orm = require('../config/orm.js');

var burgers = {

    seeBurger: function(cb){
        orm.seeBurger('burgers',function(res){
            cb(res);
        })
    },

    addBurger: function(name_Input,cb){
        orm.addBurger('burgers',name_Input,cb);
    },

    eatBurger: function(id,cb){
        orm.eatBurger('burgers',id,cb);
    }
};

module.exports = burgers;