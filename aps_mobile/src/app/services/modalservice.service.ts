import { Injectable } from '@angular/core';
export interface Noticias {
  titulo: string;
  tema: string;
  subtitulo: string;
  materia: string;
  id: number;
  
}


@Injectable({
  providedIn: 'root'
})
export class ModalserviceService {
  private noticias: Noticias[] = [
  {titulo: 'Como investir', tema: 'Bolsa de Valores',subtitulo: 'Será que investir na Bolsa de Valores é mesmo tão caro e difícil quanto você pensa?', materia: '', id: 1},
  {titulo: 'O que significa investir a curto, médio e longo prazo?',tema: 'Investimento', subtitulo: 'Menos de dois anos ou mais de uma década: o tempo que você pode deixar o dinheiro rendendo influencia a rentabilidade de uma aplicação. Entenda o porquê.', materia: '', id: 2},
  {titulo: 'Investimento em Renda Variável: Guia Para Começar Sem Medo',tema: 'Investimento', subtitulo: 'Afinal, para quem nunca se aventurou na renda variável, é normal sentir medo antes de começar a investir em ações, por exemplo. Se você faz parte desse grupo, saiba que não está sozinho.', materia: '', id: 3},
  {titulo: 'POR QUE SAIR DA POUPANÇA?',tema: 'Poupança', subtitulo: 'Por que sair da poupança e aplicar em produtos de renda fixa?', materia: '', id: 4},
  ];

  constructor() { }
}
