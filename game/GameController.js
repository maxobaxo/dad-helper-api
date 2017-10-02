var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extender: true }));
var Game = require('./Game');

// creates new Game
router.post('/', function(req, res) {
  Game.create({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    bonus: req.body.bonus
  },
  function(err, game) {
    if (err) return res.status(500).send('There was a problem adding the information to the database');
  });
})

module.exports = router;
