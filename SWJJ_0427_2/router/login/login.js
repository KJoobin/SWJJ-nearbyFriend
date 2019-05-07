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
  password  : 'k6720106',
  database  : 'myproject'
});


connection.connect();


router.get('/',function(req,res) {
  res.render(path.join(__dirname,"../../login/login.ejs"),{email_adress:"hello"+req.user})
})


passport.serializeUser(function (user, done) {
  console.log('passport session save ', user.id)
  done(null, user.userName);
});

passport.deserializeUser(function(id, done) {
  console.log('passport dess', id)
  done(null,id);
})




passport.use('local-login', new LocalStrategy({
  usernameField : 'userName',
  passwordFiled : 'password',
  passReqToCallback : true
}, function(req, email, password, done) { //done 을 사용하면 비동기 가 멈춘다
  var userName = req.body.userName; 
  connection.query(`select * FROM userlist WHERE userName = ? `,[userName],function(err,rows) {
    if(err) throw done(err);
    if(rows.length) {
      if(rows[0].password === password) {
        return done(null,{'userName' : userName, 'id' : rows[0].id});
      } else {
        return done(null,false,{message : " password 가 틀렷어 "})
      }
    } else {
      return done(null,false,{message : "username 이 틀렷어"})
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

      res.render(path.join(__dirname,"../../login/main.ejs"), {'email_adress':req.user.userName})
    });
  })(req, res, next);
});

module.exports = router
