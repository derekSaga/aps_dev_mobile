import { Component, Input } from '@angular/core';
import {PersistenciaService, Name} from '../services/persistencia.service';


@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})

export class MenuPage {

  constructor(
    private persistenciaService: PersistenciaService
  ) { }
  
  public names = this.persistenciaService.all();


}
