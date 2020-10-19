import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoConservadorPageRoutingModule } from './resultado-conservador-routing.module';

import { ResultadoConservadorPage } from './resultado-conservador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoConservadorPageRoutingModule
  ],
  declarations: [ResultadoConservadorPage]
})
export class ResultadoConservadorPageModule {}
