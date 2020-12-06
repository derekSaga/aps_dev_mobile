import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoAcoesPage } from './info-acoes.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAcoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoAcoesPageRoutingModule {}
