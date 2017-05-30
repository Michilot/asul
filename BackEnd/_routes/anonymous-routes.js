var express = require('express'),
  jwt = require('express-jwt'),
  config = require('../config'),
  quoter = require('../quoter');

var app = module.exports = express.Router();

app.get('/api/random-quote', function (req, res) {
  res.status(200).send({ "result": quoter.getRandomOne() });
});

var jwtCheck = jwt({ secret: config.secret });

//app.use('/api/usuario', jwtCheck);

app.get('/api/usuario/listar', jwtCheck, function (req, res) {
  res.status(200).send({
    "A": req.body,
    "Z": config.secret,
    "B": quoter.getRandomOne()
  });
});

app.use(function (err, req, res, next) {

  res.status(401).send(err);

});


