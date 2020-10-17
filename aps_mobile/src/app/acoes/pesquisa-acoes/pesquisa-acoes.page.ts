import { Component, OnInit } from '@angular/core';
import {acoes} from '../todas/todas.page.js';

@Component({
  selector: 'app-pesquisa-acoes',
  templateUrl: './pesquisa-acoes.page.html',
  styleUrls: ['./pesquisa-acoes.page.scss'],
})

export class PesquisaAcoesPage implements OnInit {
  // tslint:disable-next-line: variable-name
  public nomeAcao = '';
  public resultadoPesquisa = null;
  public controll = false;

  public pesquisa_acao(){
    this.resultadoPesquisa =  acoes.find(o => o.acao === this.nomeAcao.toUpperCase());
    if (this.resultadoPesquisa == null){
      this.controll = false;
      this.resultadoPesquisa = 'Ação não encontrada';
    }else{
      this.controll = true;
    }
    this.nomeAcao = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
