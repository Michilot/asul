const conn = require('./model'),
   _ = require('lodash');

 

class UsuarioModel {

   getLogin(Usuario, cb) {
      conn.query('SELECT * FROM users WHERE username = ? and password = ?', [Usuario.username, Usuario.password], cb);
   }

   getAll(cb) {
      conn.query('SELECT * FROM team', cb);
   }

   getOne(id, cb) {
      conn.query('SELECT * FROM team WHERE id = ?', id, cb);
   }

   save(data, cb) {
      conn.query('SELECT * FROM team where id = ?', data.id, (err, rows) => {
         console.log(`Número de registros: ${rows.length}`);

         if (!err)
            return (rows.length == 1)
               ? conn.query('UPDATE team SET ? WHERE id = ?', [data, data.id], cb)
               : conn.query('INSERT INTO team SET ?', data, cb);
      });
   }

   delete(id, cb) {
      conn.query('DELETE FROM team WHERE id = ?', id, cb);
   }
}

module.exports = UsuarioModel;