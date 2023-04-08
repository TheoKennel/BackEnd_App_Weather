var express = require('express');
var router = express.Router();

router.get('/', (req,res) => {
    res.json('HeLLO WORLD')
})

module.exports = router;
