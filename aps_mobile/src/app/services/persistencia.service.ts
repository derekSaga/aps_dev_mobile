import { Injectable } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import {Storage} from '@ionic/storage';


export interface Name {
  name: string;
  perfil: string;
  prazo: string;
}

@Injectable({
  providedIn: 'root'
})

export class PersistenciaService {

  private name: Name[] = [];
  

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

public update(username: string, perfil: string, prazo: string) {
  const idx = this.name.length - 1;
  this.name[idx] = { 
    name: username,
    perfil: perfil,
    prazo: prazo
   };
  this.saveData();
}

public all() {
  return this.name;
}

}
