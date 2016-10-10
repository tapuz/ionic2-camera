import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public patient = {
    base64Image: '',
    id: null
  };

  submitted = false;

  constructor(
    public navCtrl: NavController
  ) {}

  takePicture () {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then(imageData => {
      this.patient.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, err => {
      console.log(err);
    });
  }

  onSubmit () {
    console.log('submitted', this.patient);

    if (this.patient.base64Image && this.patient.id) {
      // do call
      this.submitted = true;
    }
  }
}
