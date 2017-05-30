var express = require('express'),
   jwt = require('express-jwt'),
   config = require('../config'),
   quoter = require('../quoter'),
   Vehiculo = require('../_classes/Vehiculo'),
   cifrado = require('./../_utilities/cifrado'),
   VehiculoRepository = require('../_models/vehiculo-repository'),
   vr = new VehiculoRepository(),
   cf = new cifrado()
   ;

var app = module.exports = express.Router();
var jwtCheck = jwt({ secret: config.secret });

app.use('/api/vehiculo', jwtCheck);

app.get('/api/vehiculo/usos', function (req, res) {
   var resultado = { "result": false, "data": null };
   vr.getUsos_All(null, (error, data) => {
      if (error) {
         resultado = { "result": false, "data": error };
      }
      else {
         resultado = { "result": true, "data": data };
      }
      res.status(201).send(resultado);
   });
});

app.use(function (err, req, res, next) {
   res.status(401).send(err);
});