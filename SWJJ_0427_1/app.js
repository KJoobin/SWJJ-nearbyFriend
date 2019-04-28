var express = require('express')
var app = express()
var router = require('./router/index')


/*
npm install express ejs mysql --save
npm install passport passport-local express-session connet-flash --save-dev
*/

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs")

app.listen(3000,function() {
  console.log("start ! port 3000! ")
})

app.use(express.static(__dirname + "/static"))

app.use(router);
