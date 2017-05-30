"use strict";

var CryptoJS = require('crypto-js'),
   crypto = require('crypto'),
   algorithm = 'aes-256-ctr',
   password = '86dffe1',
   vKey = 'R0VSQUxESU5FVElDRVJBTg==',
   vIV = 'TFVJU0FMQkVSVE9NSUNISQ==';;

class Cifrado {



   strHide(myword) {
      var vEncrypted = CryptoJS.AES.encrypt(myword, vKey, { iv: vIV });
      return vEncrypted;
   }

   strShow(myword) {
      var vDecrypted = CryptoJS.AES.decrypt(myword, vKey, { iv: vIV });
      return vDecrypted;
   }


   encrypt(text) {
      var cipher = crypto.createCipher(algorithm, password)
      var crypted = cipher.update(text, 'utf8', 'hex')
      crypted += cipher.final('hex');
      return crypted;
   }

   decrypt(text) {
      var decipher = crypto.createDecipher(algorithm, password)
      var dec = decipher.update(text, 'hex', 'utf8')
      dec += decipher.final('utf8');
      return dec;
   }

}
module.exports = Cifrado;