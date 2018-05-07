import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PLACES } from '../../models/mock.places'
import { Place } from '../../models/place'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  places: Place[] = PLACES;

  constructor(public navCtrl: NavController) {}

  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/imgs/barcelona/img1.jpg",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/imgs/barcelona/img2.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/imgs/barcelona/img3.jpg",
    }
  ];
}
