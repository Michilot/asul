import { Injectable } from '@angular/core';

@Injectable()
export class ConstantsService  {

   API_BACKEND: String;

   constructor() {
      this.API_BACKEND = 'http://localhost:3001/';
   }
}