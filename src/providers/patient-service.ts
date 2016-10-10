import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PatientService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PatientService {

  constructor(public http: Http) {
    console.log('Hello PatientService Provider');
  }

  send (data) {
    return new Promise(resolve => {
      const url = '';

      this.http.post(url, data)
        .map(response => response.json())
        .subscribe(data => resolve(data));
    });
  }
}
