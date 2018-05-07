import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Place } from '../../models/place'

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  place: Place;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.place = navParams.data.place;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
