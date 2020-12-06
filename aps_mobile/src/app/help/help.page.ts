import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import {PersistenciaService, Name} from '../services/persistencia.service';

@Component({
  selector: 'app-help',
  templateUrl: 'help.page.html',
  styleUrls: ['help.page.scss'],
})

export class HelpPage {

  constructor(
    public navCtrl: NavController) {
  }

}
