import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cmp-home',
  templateUrl: './cmp-home.component.html',
  styleUrls: ['./cmp-home.component.scss']
})
export class CmpHomeComponent implements OnInit {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;
  //jwtHelper: JwtHelper = new JwtHelper();

  constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
    this.jwt = localStorage.getItem('id_token');
    console.log('vvvvvvvvvv');
    //this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
    //console.log(this.jwt);
    /*console.log(
      this.jwtHelper.decodeToken(this.jwt),
      this.jwtHelper.getTokenExpirationDate(this.jwt),
      this.jwtHelper.isTokenExpired(this.jwt)
    );*/

    //this.decodedJwt = this.jwtHelper.decodeToken(this.jwt);
    //this.jwtDate = this.jwtHelper.getTokenExpirationDate(this.jwt);
    //this.jwtExpired = this.jwtHelper.isTokenExpired(this.jwt);

    //localStorage.removeItem('id_token');
    //console.log('jajaja');
  }

  ngOnInit() {
  }

}
