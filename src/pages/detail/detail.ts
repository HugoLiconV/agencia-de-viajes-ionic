import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Place } from '../../models/place'
import { Platform } from 'ionic-angular';

declare var google;
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  place: Place;
  map: any;
  isAndroid: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    platform: Platform) {
    this.place = navParams.data.place;
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    this.loadMap();
  }

  loadMap(){
  let latitude = this.place.latitude;//position.coords.latitude;
  let longitude = this.place.longitude;//position.coords.longitude;
  console.log(latitude, longitude);

  // create a new map by passing HTMLElement
  let mapEle: HTMLElement = document.getElementById('map');

  // create LatLng object
  let myLatLng = {lat: latitude, lng: longitude};

  // create map
  this.map = new google.maps.Map(mapEle, {
    center: myLatLng,
    zoom: 12
  });

  google.maps.event.addListenerOnce(this.map, 'idle', () => {
    new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Hello World!'
      });
      mapEle.classList.add('show-map');
    });
  }
}
