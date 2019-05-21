var express = require('express')
var app = express()
var router = express.Router()
var mysql = require('mysql')
var path = require('path')
var multer = require('multer')
var upload = multer({ dest : path.join(__dirname,'../../static/upload/'), limits: { fileSize : 5 * 1024 * 1024 } } );


const connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : 'password',
  database  : 'nearbyFriends'
});


router.post('/', upload.single('img'), function(req,res) {
  console.log(req.file);
  res.send(req.file.path);
})

connection.connect();


module.exports= router;
// https://www.zerocho.com/category/NodeJS/post/5950a6c4f7934c001894ea83 multer 정리
