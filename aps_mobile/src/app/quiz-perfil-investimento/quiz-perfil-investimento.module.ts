import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizPerfilInvestimentoPageRoutingModule } from './quiz-perfil-investimento-routing.module';

import { QuizPerfilInvestimentoPage } from './quiz-perfil-investimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizPerfilInvestimentoPageRoutingModule
  ],
  declarations: [QuizPerfilInvestimentoPage]
})
export class QuizPerfilInvestimentoPageModule {}
