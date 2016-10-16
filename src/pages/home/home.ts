import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { PatientService } from '../../providers/patient-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PatientService]
})
export class HomePage {
  public patient = {
    image: '',
    patientID: null
  };

  public sending = false;

  constructor(
    public navCtrl: NavController,
    public patientService: PatientService
  ) {}

  takePicture () {
    this.sending = true;

    const options = {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      correctOrientation: true,
      targetWidth: 1000,
      targetHeight: 1000
    }

    Camera.getPicture(options)
      .then(imageData => {
        this.patient.image = 'data:image/jpeg;base64,' + imageData;
        this.send();
      }, err => {
        console.log('error taking image' , err);
      });
  }

  send () {
    if (this.patient.image && this.patient.patientID) {
      this.patientService.send(this.patient)
        .then(data => {
          console.log('call done', data);
          this.patient.image = '';
          this.sending = false;
        })
        .catch(e => {
          console.log('error uploading image ', e);
          this.sending = false;
        });
    }
  }
}
