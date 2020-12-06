import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesquisaAcoesPageRoutingModule } from './pesquisa-acoes-routing.module';

import { PesquisaAcoesPage } from './pesquisa-acoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesquisaAcoesPageRoutingModule
  ],
  declarations: [PesquisaAcoesPage]
})
export class PesquisaAcoesPageModule {}
