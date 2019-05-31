var express = require('express')
var app = express()
var router = express.Router()

var path = require('path')
var join = require('./join/join')
var login = require('./login/login')
var logout = require('./logout/logout')
var editor = require('./post/editor.js')
var list = require('./list/list.js')
var myPage = require('./myPage/main')
var write = require('./write/write')
var main = require('./main/main')



/*
CREATE TABLE identity (
    -> id INT(11) unsigned AUTO_INCREMENT NOT NULL,
    -> email VARCHAR(40) NOT NULL,
    -> password  VARCHAR(40) NOT NULL,
    -> PRIMARY KEY(id)
    -> );

    sql 에 넣을 데이터목록, 목록들의 데이터형? 닉네임, ... 넣을,
    메인페이지 구성,
    구글api  신용카드 등록,

*/


  router.get('/',function(req,res) {
    console.log(req.user)
    if(req.user) {
      res.render(path.join(__dirname,"../views/main.ejs"))
    } else {
      res.render(path.join(__dirname,"../views/login.ejs"))
  }
  })

router.use('/join',join)
router.use('/mypage',myPage)
router.use('/login',login)
router.use('/logout',logout)
router.use('/editor',editor)
router.use('/list',list)
router.use('/write',write)
router.use('/main',main)


module.exports = router
