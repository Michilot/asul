import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    /* if (tokenNotExpired()) {*/
    // console.log(tokenNotExpired());
     //console.log('ssssssssss');
    /* if (1 === 1) {*/
    if (tokenNotExpired('BRpP7cze')) {
      // console.log('entro tokenNotExpired');
      // console.log(localStorage.getItem('BRpP7cze'));
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
