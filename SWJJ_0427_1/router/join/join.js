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
  password : 'baby',
  database : 'nearbyfriends'
});


connection.connect();


// router.get('/',function(req,res) {
//   res.redirect('/');
// })


passport.serializeUser(function (user, done) {
  console.log('passport session save ', user.id)
  done(null, user.email);
});

passport.deserializeUser(function(id, done) {
  console.log('passport dess', id)
  done(null,id);
})




passport.use('local-join', new LocalStrategy({
  usernameField : 'email',
  passwordFiled : 'password',
  passReqToCallback : true
}, function(req, email, password, done) { //done 을 사용하면 비동기 가 멈춘다
  // console.log('local-join callback called'); // semicolon 필요?
  var query = connection.query('select * from user where email=?', [email], function(err,rows){
        if(err) return done(err);
        if(rows.length){
            console.log('existed user')
            return done(null, false, {message : 'your email is already used'})
        }else{
            var sql = {email: email, pw: password}
            var query = connection.query('insert into user set ?', sql, function(err,rows){
                if(err) throw err
                return done(null, {'email': email, 'id': rows.insertId})
            })
        }
    })
}
))

router.post('/', function(req, res, next) {
    var info = req.body;
    if(info.sex === 'male'){
        info.sex = 1
    }else if(info.sex === 'female'){
        info.sex = 2
    }else{
        info.sex = 3
    }
    //console.log(info)
    var responseData = {};
    var query = connection.query('insert into identity set ?', info, function(err,rows){
        if(err) throw err
        responseData = {'email': info.email, 'password': info.password}
        //console.log(responseData)
        return responseData;
    })
});

router.post('/', passport.authenticate('local-join', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true
}))

module.exports = router
