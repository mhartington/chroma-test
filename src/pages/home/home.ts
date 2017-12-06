import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import chroma from 'chroma-js';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public value = '';
  color = '';
  constructor(public navCtrl: NavController) {
    this.color = chroma('#D4F880')
      .darken()
      .hex();
  }
}
