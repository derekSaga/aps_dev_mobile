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
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'resultado-Conservador',
    loadChildren: () => import('./resultado-conservador/resultado-conservador.module').then( m => m.ResultadoConservadorPageModule)
  },
  {
    path: 'resultado-Moderado',
    loadChildren: () => import('./resultado-moderado/resultado-moderado.module').then( m => m.ResultadoModeradoPageModule)
  },
  {
    path: 'resultado-Agressivo',
    loadChildren: () => import('./resultado-agressivo/resultado-agressivo.module').then( m => m.ResultadoAgressivoPageModule)
  },
  {
    path: 'resultado-Iniciante',
    loadChildren: () => import('./resultado-iniciante/resultado-iniciante.module').then( m => m.ResultadoIniciantePageModule)
  }




];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
