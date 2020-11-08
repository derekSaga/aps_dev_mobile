import { Injectable } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import {MenuPage} from '../menu/menu.page';
import {Storage} from '@ionic/storage';


export interface Name {
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class PersistenciaService {

  private name: Name[] = [];
  menuPage = MenuPage;

constructor(
  private storage: Storage) {
  this.loadData();
}

private async loadData(){
  const loaded = await this.storage.get('name');
  this.name.push(...loaded);
}

private async saveData(){
  this.storage.set('name', this.name);
}

public create(name: Name) {
  this.name.push({ ...name });
  this.saveData();
}

public all() {
  return this.name;
}

}
