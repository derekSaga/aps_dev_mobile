import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import {PersistenciaService, Name} from '../services/persistencia.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public name1: Name = {
    name: ''
  };

  constructor(
    public navCtrl: NavController,
    private PersistenciaService: PersistenciaService) {
  }

  public handleSave(nnnn) {
    this.name1 = {
      name: nnnn
    };
    
    this.PersistenciaService.create(this.name1);
  }

}
