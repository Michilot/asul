import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ConstantsService } from './../srv-constants/srv-constants';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class VehiculoService {

      API: String;
      // localStorage.setItem('VuERSrLp', this.vEncriptUser.toString()); // ID DE USUARIO
      //   console.log(localStorage.getItem('123'));

      constructor(private http: Http,
            public authHttp: AuthHttp,
            public ConstantService: ConstantsService) {
            this.API = this.ConstantService.API_BACKEND;
      }

      ObtenerUsos(IdUser: string) {
            return this.authHttp.get(this.API + 'api/vehiculo/usos')
                  .map((response: Response) => response.json())
                  ;
      }

}
