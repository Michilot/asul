var express = require('express'),
  _ = require('lodash'),
  config = require('../config'),
  jwt = require('jsonwebtoken'),
  jwtpro = require('express-jwt'),
  Usuario = require('../_classes/Usuario'),
  cifrado = require('./../_utilities/cifrado'),
  UsuarioModel = require('../_models/user-repository'),
  mu = new UsuarioModel(),
  cf = new cifrado();

var app = module.exports = express.Router();

// XXX: This should be a database of users :).
var users = [{
  id: 1,
  username: 'gonto',
  password: 'gonto'
}];

/*var jwtCheck = jwtpro({
  secret: config.secret
});*/
//app.use('/sessions', jwtCheck);
app.post('/sessions/create', function (req, res) {
  var user;
  if (!req.body.username || !req.body.password) {
    return res.status(201).send("Por favor verifique su información de acceso.");
  }
  let bSalida = { "result": false, "id_token": "", "oUsuario": "" }

  oUsuario = new Usuario();
  oUsuario.username = req.body.username;
  oUsuario.password = cf.encrypt(req.body.password).toString();
  console.log(oUsuario.password);
  console.log(cf.strHide(oUsuario.password).toString());


  mu.getLogin(oUsuario, (error, results) => {
    if (error) {
      console.log('error');
    }
    else {
      /*
            var sTextoEncript = cf.encrypt('Michilot1111111');
            console.log(sTextoEncript);
            var sTextoDecript = cf.decrypt(sTextoEncript);
            console.log(sTextoDecript);*/

      //Cifrado

      var iResult = Object.keys(results).length;
      if (iResult === 0) {
        //return res.status(201).send("Por favor verifique su información de acceso.");
        res.status(201).send({ "result": false });
      }
      else {
        var result = JSON.stringify(results);
        var types = JSON.parse(result);
        res.status(201).send(
          {
            "result": true,
            "id_token": createToken(types[0].password),
            "oUsuario": results
          }
        );


      }
    }

  });


  /*var user = _.find(users, { username: req.body.username });
  if (!user) {
    return res.status(401).send("The usersssname or password don't match");
  }

 */


});

function createToken(sKey) {
  var mToken = jwt.sign({ data: sKey }, config.secret, { expiresIn: '1h' });
  return mToken; //jwt.sign(sKey, config.secret, { expiresInMinutes: 2 });
  //return jwt.sign(sKey, config.secret, { expiresInMinutes: 1 });
}