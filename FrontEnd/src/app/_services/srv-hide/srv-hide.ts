import { Injectable } from '@angular/core';
import * as CryptoJS from '../../../../node_modules/crypto-js';

@Injectable()
export class SrvHideService {

   vKey: any;
   vIV: any;
   vEncrypted: any;
   vDecrypted: any;

   constructor() {
      this.vKey = 'R0VSQUxESU5FVElDRVJBTg=='; // CryptoJS.enc.Base64.parse('bHVpc2FsYmVydG9taWNoaWxvdGNvcnJlYQ==');
      this.vIV = 'TFVJU0FMQkVSVE9NSUNISQ=='; //CryptoJS.enc.Base64.parse('Z2VyYWxkaW5ldGljZXJhbnRpY2VyYW4=');
   }


   strHide(myword) {
      // Encrypt the Password with Base64
      this.vEncrypted = CryptoJS.AES.encrypt(myword, this.vKey, { iv: this.vIV });
      return this.vEncrypted;
   }

   strShow(myword) {
      this.vDecrypted = CryptoJS.AES.decrypt(this.vEncrypted, this.vKey, { iv: this.vIV });
      return this.vDecrypted;
      // console.log('x:' + this.vDecrypted.toString(CryptoJS.enc.Utf8));

      //var c = decrypted.toString(CryptoJS.enc.Utf8);

   }


}