var express = require('express');
var router = express.Router();
var Fool = require('../models/fools.js');

// GET SINGLE
router.get('/fool/:id', function (req, res, next) {
    Fool.findByIdQ(req.params.id)
        .then(function (result) {
            res.json(result);
        })
        .catch(function (result) {
            res.json({
                'message': result
            });
        })
        .done();
});

// GET ALL
router.get('/fools', function (req, res, next) {
    Fool.findQ()
        .then(function (result) {
            res.json(result);
        })
        .catch(function (result) {
            res.json({
                'message': result
            });
        })
        .done();
});

// POST SINGLE
router.post('/fool/:name/:age', function (req, res, next) {
    new Fool({
            name: req.params.name,
            age: req.params.age
        })
        .saveQ()
        .then(function (result) {
            res.json(result);
        })
        .catch(function (result) {
            res.json({
                'message': result
            });
        })
        .done();
});

// DELETE SINGLE


module.exports = router;