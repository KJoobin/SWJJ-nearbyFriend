var express = require('express')
var app = express()
var router = express.Router()
var mysql = require('mysql')
var path = require('path')


const connection = mysql.createConnection({
  host : 'localhost',
  port : 3306, //?
  user : 'root',
  password : 'baby',
  database : 'nearbyfriends'
});


connection.connect();


router.get('/',function(req,res) { // 여기에서 로그인이 되어있는지 여부를 확인하여 페이지 render
  console.log(user);

  res.render('list.ejs', {'nickname': req.query.nickname});
})


module.exports = router