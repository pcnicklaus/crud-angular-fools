var express = require('express');
var router = express.Router();
var Duck = require('../models/ducks.js');

// GET SINGLE
router.get('/duck/:id', function(req, res, next) {
  Duck.findByIdQ(req.params.id)
    .then(function(result){res.json(result);
}).catch(function(result){
    res.json({'message': result});
}).done();
});

// GET ALL
router.get('/ducks', function(req, res, next){
    Duck.findQ()
        .then(function(result){
            res.json(result);
    }).catch(function(result){
        res.json({'message': result});
    }).done();
});

// POST SINGLE
router.post('/duck/:name/:age', function(req, res, next){
        new Duck({
            name: req.params.name,
            age: req.params.age
        })
        .saveQ()
        .then(function(result){
            res.json(result);
        }).catch(function(result){
            res.json({'message': result});
        }).done();
    });

// DELETE SINGLE


module.exports = router;
