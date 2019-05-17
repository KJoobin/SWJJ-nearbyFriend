var express = require('express')
var app = express()
var router = express.Router()
var mysql = require('mysql')
var path = require('path')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy



const connection = mysql.createConnection({
  host : 'localhost',
  port : 3306, //?
  user : 'root',
  password : 'password',
  database : 'nearbyfriends'
});


connection.connect();


router.get('/',function(req,res) {
  res.redirect('/');
})


passport.serializeUser(function (user, done) {
  console.log('passport session save ', user.id)
  done(null, user.email);
});

passport.deserializeUser(function(id, done) {
  console.log('passport dess', id)
  done(null,id);
})




passport.use('local-login', new LocalStrategy({
  usernameField : 'email',
  passwordFiled : 'password',
  passReqToCallback : true
}, function(req, email, password, done) { //done 을 사용하면 비동기 가 멈춘다
  connection.query(`SELECT * FROM identity WHERE email = ? `,[email],function(err,rows) {
    if(err) throw done(err);
    if(rows.length) {
      if(rows[0].password === password) {
        return done(null,{'email' : email, 'id' : rows[0].id});
      } else {
        return done(null,false,{message : " password 가 틀렷어 "})
      }
    } else {
      return done(null,false,{message : "email 이 틀렷어"})
    }
  })
}
))

router.post('/', function(req, res, next) {
  passport.authenticate('local-login', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.status(401).json(info); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      // return res.redirect('/users/' + user.username);

      return res.json("{}");
    });
  })(req, res, next);
});

module.exports = router
