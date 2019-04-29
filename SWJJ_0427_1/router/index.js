var express = require('express')
var app = express()
var router = express.Router()
var mysql = require('mysql')
var path = require('path')
var login = require('./login/login')

const connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : 'password',
  database  : 'nearbyFriends'
});

/*
CREATE TABLE identity (
    -> id INT(11) unsigned AUTO_INCREMENT NOT NULL,
    -> email VARCHAR(40) NOT NULL,
    -> password  VARCHAR(40) NOT NULL,
    -> PRIMARY KEY(id)
    -> );
*/

connection.connect();

router.get('/',function(req,res) {
  res.render(path.join(__dirname,"../login/index.ejs"),{email_adress:"Hello World"})
})


router.use('/login',login)
module.exports = router
