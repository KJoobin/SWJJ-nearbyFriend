var express = require('express')
var app = express()
var router = express.Router()
var mysql = require('mysql')
var path = require('path')

const connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : 'baby',
  database  : 'nearbyFriends'
});


connection.connect();

// UPDATE table_name SET field1 = new-value1, field2 = new-value2
// [WHERE Clause]




module.exports= router;
