var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/demos/:name',function(req,res){
    var demo_info=req.params.name;
    res.render('demos/'+demo_info);
});

module.exports = router;
