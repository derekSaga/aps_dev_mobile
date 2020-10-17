import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizPerfilInvestimentoPage } from './quiz-perfil-investimento.page';

const routes: Routes = [
  {
    path: '',
    component: QuizPerfilInvestimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizPerfilInvestimentoPageRoutingModule {}
