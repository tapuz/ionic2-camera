import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { POST_IMAGE_URL } from './api';
import 'rxjs/add/operator/map';

@Injectable()
export class PatientService {
  constructor(public http: Http) {
  }

  send (data) {
    return new Promise(resolve => {
      const url = POST_IMAGE_URL;
      const body = JSON.stringify(data);
      const headers = new Headers({ 'Content-Type': 'application/json' });

      this.http.post(url, body)
        .subscribe(data => resolve(data));
    });
  }
}
