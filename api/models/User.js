/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema:true,

  attributes: {
/* SHORT DATA */
    email :{
  		type:"String",
  		email:true,
  		required:"true",
      unique:true
  	},
  	
    encryptedPassword:{
  		type:"String"
  	},

/* SHIPPING DATA */  	
    firstname:{
  		type:"String",
  	},
  	
    lastname:{
  		type:"String",
  	},
  	
    adress:{
  		type:"String",
  	},
  	
    city:{
  		type:"String",
  	},
  	
    zipcode:{
  		type:"String",
  	},
  	
    country:{
  		type:"String",
  	},

    toJSON: function(){
      var  obj = this.toObject();
      delete obj.password;
      delete obj.confirmation;
      delete obj.encryptedPassword;
      delete obj._csrf;
      return obj;
    }

  },

  beforeCreate : function(values, next){
    if(!values.password || values.password != values.confirmation){
      return next({
        err : ["Password doesn't match password confirmation"]
      });
    }
    require("bcrypt").hash(values.password, 10, function passwordEncrypted(err, encryptedPassword){
      if(err)return next(err);
      values.encryptedPassword = encryptedPassword;
      next();
    });
  }
};

