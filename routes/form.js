let express = require('express')
let router = express.Router()

/*GET form for message*/
router.get('/', (req,res,next) => {
    res.render('form')
})

module.exports = router