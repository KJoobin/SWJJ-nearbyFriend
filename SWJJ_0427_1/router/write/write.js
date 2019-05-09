var express = require('express')
var app = express()
var router = express.Router()
var mysql = require('mysql')
var path = require('path')


const connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : 'password',
  database  : 'nearbyFriends'
});


connection.connect();

router.get('/',function(req,res) {
  res.render(path.join(__dirname+'../../../login/write.ejs'))
})





module.exports= router;
