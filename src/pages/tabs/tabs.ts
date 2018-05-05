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


// @Component({
//   template: `
//     <ion-tabs class="tabs-icon-text" [color]="isAndroid ? 'royal' : 'primary'">
//       <ion-tab tabIcon="water" tabTitle="Water" [root]="rootPage"></ion-tab>
//       <ion-tab tabIcon="leaf" tabTitle="Life" [root]="rootPage"></ion-tab>
//       <ion-tab tabIcon="flame" tabTitle="Fire" [root]="rootPage"></ion-tab>
//       <ion-tab tabIcon="magnet" tabTitle="Force" [root]="rootPage"></ion-tab>
//     </ion-tabs>
// `})
// export class IconTextPage {
//   rootPage = TabIconTextContentPage;

//   isAndroid: boolean = false;

//   constructor(platform: Platform) {
//     this.isAndroid = platform.is('android');
//   }
// }
