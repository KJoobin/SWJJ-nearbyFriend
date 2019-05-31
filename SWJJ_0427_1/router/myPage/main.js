var express = require('express')
var app = express()
var router = express.Router()
var mysql = require('mysql')
var path = require('path')
var passport = require('passport')
var upload = require('./upload')
var update = require('./update')
var LocalStrategy = require('passport-local').Strategy


const connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : 'baby',
  database  : 'nearbyFriends'
});


connection.connect();



router.get('/',function(req,res) {
  if(req.user) {
    var user = req.user.email
    connection.query(`SELECT * FROM identity WHERE email = ?`,[user],function(err,rows) {
      if(err) throw err;
      var nickName = rows[0].nickname;
      var sex = rows[0].sex;
      if(sex === 1) {
        sex = "남자"
      } else if (sex === 2) {
        sex = "여자"
      } else if (sex === 3) {
        sex = "중성"
      }
      var age = rows[0].age;
      var area = rows[0].area;
      var about = rows[0].about;
      var grade = rows[0].grade;
      var picture = (rows[0].picture === null ? "https://s3.ap-northeast-2.amazonaws.com/nearbyfriends/profile_img/3092827.png" : rows[0].picture)
      res.render(path.join(__dirname, "/../../views/mypage.ejs"),{userName:user,nickName:nickName,sex:sex,age:age,area:area,about:about,grade:grade,picture:picture})
    })
  } else {
    res.redirect("/")
  }
})

router.use('/upload',upload)
router.use('/update',update)

module.exports= router;
