import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoIniciantePageRoutingModule } from './resultado-iniciante-routing.module';

import { ResultadoIniciantePage } from './resultado-iniciante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoIniciantePageRoutingModule
  ],
  declarations: [ResultadoIniciantePage]
})
export class ResultadoIniciantePageModule {}
