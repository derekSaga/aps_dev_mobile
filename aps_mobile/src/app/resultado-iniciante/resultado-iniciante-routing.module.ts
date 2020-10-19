import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoIniciantePage } from './resultado-iniciante.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoIniciantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoIniciantePageRoutingModule {}
