import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoConservadorPage } from './resultado-conservador.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoConservadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoConservadorPageRoutingModule {}
