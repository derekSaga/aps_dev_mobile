import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoAcoesPageRoutingModule } from './info-acoes-routing.module';

import { InfoAcoesPage } from './info-acoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoAcoesPageRoutingModule
  ],
  declarations: [InfoAcoesPage]
})
export class InfoAcoesPageModule {}
