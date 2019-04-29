var express = require('express')
var app = express()
var router = express.Router()
var mysql = require('mysql')
var path = require('path')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy


const connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : 'password',
  database  : 'nearbyFriends'
});


connection.connect();

passport.use('local-join', new LocalStrategy({
  usernameField : 'email',
  passwordFiled : 'password',
  passReqToCallback : true
}, function(req, email, password, done) { //done 을 사용하면 비동기 가 멈춘다
  console.log('local-join callback called');
}
))

// router.post('/',function(req,res) {
//   email = req.body.email;
//   password = req.body.password;
//   var result = {};
//   connection.query(`SELECT * FROM identity WHERE email = ? `,email,function(err,rows) {
//     if(err) throw err;
//     if(rows[0]) {
//       if(rows[0].password === password) {
//         result.send = email;
//         result.info = true;
//         res.send(result);
//       } else {
//         result.send = email;
//         result.info = false;
//         res.send(result)
//       }
//     }
//     else {
//       result.send = false;
//       res.send(result);
//     }
//   })
// })

module.exports = router;
