import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoAgressivoPage } from './resultado-agressivo.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoAgressivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoAgressivoPageRoutingModule {}
