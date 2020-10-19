import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoModeradoPage } from './resultado-moderado.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoModeradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoModeradoPageRoutingModule {}
