import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'acoes',
    loadChildren: () => import('./acoes/acoes.module').then( m => m.AcoesPageModule)
  },
  {
    path: 'quiz-perfil-investimento',
    loadChildren: () => import('./quiz-perfil-investimento/quiz-perfil-investimento.module').then( m => m.QuizPerfilInvestimentoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
