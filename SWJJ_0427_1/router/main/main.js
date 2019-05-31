var express = require('express')
var app = express()
var router = express.Router()

router.get('/',function(req,res) {
  console.log(req.user)
  if(req.user) {
    res.render(path.join(__dirname,"../views/main.ejs"))
  } else {
    res.redirect('/')
}
})


module.exports= router;
