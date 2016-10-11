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
    base64Image: '',
    id: null
  };

  sending = false;

  constructor(
    public navCtrl: NavController,
    public patientService: PatientService
  ) {}

  takePicture () {
    const options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }

    Camera.getPicture(options)
      .then(imageData => {
        this.patient.base64Image = 'data:image/jpeg;base64,' + imageData;
      }, err => {
        console.log(err);
      });
  }

  onSubmit () {
    this.sending = true;

    console.log('submitted', this.patient);

    //if (this.patient.base64Image && this.patient.id) {
      this.patientService.send(this.patient)
        .then(data => {
          console.log('call done', data);
          this.sending = false;
        });
    //}
  }
}
