var express = require('express')
var app = express()
var router = express.Router()
var mysql = require('mysql')
var path = require('path')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

app.set('view engine', 'ejs')

const connection = mysql.createConnection({
  host : 'localhost',
  port : 3306, //?
  user : 'root',
  password : 'password',
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
  var info = req.body;
  console.log("info",info); // semicolon 필요?
  if(info.sex === 'male'){
      info.sex = 1
  }else if(info.sex === 'female'){
      info.sex = 2
  }else{
      info.sex = 3
  }

  var query = connection.query('select * from identity where email=?', [email], function(err,rows){
        if(err) return done(err);
        if(rows.length){
            console.log('existed email')
            return done(null, false, {message : '이미 가입된 이메일입니다.'}) // 이메일이 이미 있으면 message를 info로 보내 모달창 내에서 ajax로 처리한다. 근데 페이지가 /join 으로 넘어가 message가 브라우저에 표시되고 있음.
        }else{
          connection.query('insert into identity set ?', info, function(err,rows){ // 이메일에서 통과가 되면 테이블에 사용자를 insert 한 후.... name 정보를 가지고 join-complete.ejs로 넘어가게 했어. 잘 넘어가긴 하는데, 코드 리뷰좀 해줘. 아! 세션이 유지가 안되는 것 같아!! 밑에서 res.json 안하고, res.render를 써서 그런가봐.
              if(err) throw err
              //console.log(responseData)
              return done(null, {'email': email, 'nickname' : info.nickname})
          })

        }
    })
}
))

router.post('/', function(req, res, next) {
  console.log(req.body)
    passport.authenticate('local-join', function(err, user, info) {
      console.log("user",user);
      console.log("info",info);
        if (err) { return next(err); }
        if (!user) { return res.status(401).json(info); }
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          console.log("render")
          return res.render('join-complete.ejs', {'nickname' : user.nickname});

          // return res.json(user);
        });
      })(req, res, next);
});


module.exports = router