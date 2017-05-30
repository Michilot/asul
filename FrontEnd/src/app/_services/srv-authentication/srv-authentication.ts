import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { contentHeaders } from './../../_components/cmp-common/headers';
import { ConstantsService } from './../srv-constants/srv-constants'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthenticationService {

  API: String;

  constructor(
    private http: Http,
    public ConstantService: ConstantsService
  ) {
    this.API = this.ConstantService.API_BACKEND;
  }

  login(username: string, password: string) {

    let body = {
      username: username,
      password: password
    };

    return this.http.post(this.API + 'sessions/create', body, { headers: contentHeaders })
      .map((response: Response) => response.json())
      ;
  }

  logout() {
    localStorage.removeItem('BRpP7cze'); // ID DE TOKEN
    localStorage.removeItem('VuERSrLp'); // ID DE USUARIO
  }

}

