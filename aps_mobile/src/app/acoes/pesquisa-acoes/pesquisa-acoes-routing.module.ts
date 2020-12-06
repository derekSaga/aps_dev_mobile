import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisaAcoesPage } from './pesquisa-acoes.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisaAcoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesquisaAcoesPageRoutingModule {}
