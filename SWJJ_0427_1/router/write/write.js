var express = require('express')
var app = express()
var router = express.Router()
var mysql = require('mysql')
var path = require('path')


const connection = mysql.createConnection({
  host      : 'localhost',
  user      : 'root',
  password  : 'baby',
  database  : 'nearbyFriends'
});


connection.connect();

router.get('/',function(req,res) {
  if(req.user) {
    res.render(path.join(__dirname+'../../../views/write.ejs'))
  } else {
    res.redirect("/")
}
})





module.exports= router;
