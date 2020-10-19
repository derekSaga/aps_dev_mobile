import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoAgressivoPageRoutingModule } from './resultado-agressivo-routing.module';

import { ResultadoAgressivoPage } from './resultado-agressivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoAgressivoPageRoutingModule
  ],
  declarations: [ResultadoAgressivoPage]
})
export class ResultadoAgressivoPageModule {}
