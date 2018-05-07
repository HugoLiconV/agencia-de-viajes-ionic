import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PLACES } from '../../models/mock.places'
import { Place } from '../../models/place'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  places: Place[];
  constructor(public navCtrl: NavController) {
    this.places = PLACES;
  }

}
