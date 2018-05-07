import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PLACES } from '../../models/mock.places'
import { Place } from '../../models/place'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  // items: String[] = [];
  items: Places[];

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    // this.items = [];
    // for(let place of PLACES){
    //   this.items.push(place.name);
    // }
    this.items = PLACES;
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
