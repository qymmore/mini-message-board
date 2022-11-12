var express = require('express');
var router = express.Router();

const messages = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages});
});

router.post('/new', (req,res,next) => {
  messages.push({
    text: req.body.input,
    user: req.body.username,
    added: new Date()
  })
  res.redirect('/')
})

router.get('/form', (req,res) => {
  res.render('form')
})

module.exports = router;
