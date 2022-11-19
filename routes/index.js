var express = require('express');
var router = express.Router();

const messages = [{
  text: `Omg it's a mini message board!`,
  user: 'tokikokoki',
  added: new Date().toLocaleString()
}, 
{
  text: `I could really use some coke rn (the soda of course)`,
  user: 'notadruglord',
  added: new Date().toLocaleString()
}];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages});
});

router.post('/new', (req,res,next) => {
  messages.push({
    text: req.body.input,
    user: req.body.username,
    added: new Date().toLocaleString()
  })
  res.redirect('/')
})

router.get('/form', (req,res) => {
  res.render('form')
})


module.exports = router;
