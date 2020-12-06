import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcoesPage } from './acoes.page';

const routes: Routes = [
  {
    path: '',
    component: AcoesPage,
    children: [
      {
        path: 'todas',
        loadChildren: () => import('./todas/todas.module').then(m => m.TodasPageModule)
      },
      {
        path: 'info-acoes',
        loadChildren: () => import('./info-acoes/info-acoes.module').then( m => m.InfoAcoesPageModule)
      },
      {
        path: 'pesquisa-acoes',
        loadChildren: () => import('./pesquisa-acoes/pesquisa-acoes.module').then( m => m.PesquisaAcoesPageModule)
      },
      {
        path: '',
        redirectTo: 'info-acoes',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcoesPageRoutingModule { }
