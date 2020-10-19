import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoModeradoPageRoutingModule } from './resultado-moderado-routing.module';

import { ResultadoModeradoPage } from './resultado-moderado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoModeradoPageRoutingModule
  ],
  declarations: [ResultadoModeradoPage]
})
export class ResultadoModeradoPageModule {}
