const conn = require('./model'),
   _ = require('lodash');



class VehiculoRepository {

   getUsos_All(IdUsuario, cb) {
      console.log('cccc');
      conn.query('SELECT * FROM tblusos', cb);
   }


}

module.exports = VehiculoRepository;