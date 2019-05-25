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


router.get('/',function(req,res) {
  res.render('editor.ejs');
})


router.post('/',function(req,res) {
  var info = req.body;
  var query = connection.query('insert into post set ?', info, function(err, rows){
    if(err) throw err
    console.log('1 posting success')
  })
  res.redirect('/list');
})



module.exports = router
