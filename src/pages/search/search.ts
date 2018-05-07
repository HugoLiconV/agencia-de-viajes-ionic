import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PLACES } from '../../models/mock.places'
import { Place } from '../../models/place'
import { DetailPage } from '../detail/detail'

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  // items: String[] = [];
  places: Place[];

  constructor(public nav: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.places = PLACES;
  }

  openNavDetailsPage(place) {
    this.nav.push(DetailPage, { place: place });
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.places = this.places.filter((place) => {
        return (place.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
