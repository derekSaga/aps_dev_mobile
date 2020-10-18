import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
<<<<<<< HEAD
    path: 'acoes',
    loadChildren: () => import('./acoes/acoes.module').then(m => m.AcoesPageModule)
  },
  {
    path: 'quiz-perfil-investimento',
    loadChildren: () => import('./quiz-perfil-investimento/quiz-perfil-investimento.module').then(m => m.QuizPerfilInvestimentoPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  },
=======
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  },
>>>>>>> 8a5fab37c859418e5b18e74edaa7bb53b45914c3
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
