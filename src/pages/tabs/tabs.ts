import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  isAndroid: boolean = false;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
    console.log("es android? "+this.isAndroid);
  }
}
