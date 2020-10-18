import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {MenuPage} from '../menu/menu.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public name: string;
  menuPage = MenuPage;

  constructor(public navCtrl: NavController) {
  }
}
