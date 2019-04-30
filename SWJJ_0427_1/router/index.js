var express = require('express')
var app = express()
var router = express.Router()

var path = require('path')
var join = require('./signUp/signUp')
var login = require('./login/login')
var logout = require('./logout/logout.js')



/*
CREATE TABLE identity (
    -> id INT(11) unsigned AUTO_INCREMENT NOT NULL,
    -> email VARCHAR(40) NOT NULL,
    -> password  VARCHAR(40) NOT NULL,
    -> PRIMARY KEY(id)
    -> );
*/


  router.get('/',function(req,res) {
    console.log(req.user);
    if(!req.user) {
      res.render(path.join(__dirname,"../login/login.ejs"),{email_adress : "hello"})
    } else {
    res.render(path.join(__dirname,"../login/main.ejs"),{email_adress : req.user})
  }
  })



router.use('/join',join)
router.use('/login',login)
router.use('/logout',logout)
module.exports = router
