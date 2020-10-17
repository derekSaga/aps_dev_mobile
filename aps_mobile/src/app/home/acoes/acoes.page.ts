import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.page.html',
  styleUrls: ['./acoes.page.scss'],
})
export class AcoesPage implements OnInit {

  constructor() { }

  public acaoAtual = 0;

  public acoes = [
    {
      nome_empresa: 'Metalurgica Gerdau S.A.',
      acao: 'GOAU3',
      variacao_dia_perc: 0.003492402,
      valor_final: 8.62,
      valor_abertura: 8.59
    },
    {
      nome_empresa: 'Metalurgica Gerdau S.A.',
      acao: 'GOAU4',
      variacao_dia_perc: 0.0050916695,
      valor_final: 9.87,
      valor_abertura: 9.82
    },
    {
      nome_empresa: 'Metalúrgica Riosulense S.A.',
      acao: 'RSUL4',
      variacao_dia_perc: 0.0,
      valor_final: 214.0,
      valor_abertura: 214.0
    },
    {
      nome_empresa: 'METISA Metalúrgica Timboense S.A.',
      acao: 'MTSA3',
      variacao_dia_perc: 0.0,
      valor_final: 35.0,
      valor_abertura: 35.0
    },
    {
      nome_empresa: 'METISA Metalúrgica Timboense S.A.',
      acao: 'MTSA4',
      variacao_dia_perc: 0.011152459,
      valor_final: 27.2,
      valor_abertura: 26.9
    },
    {
      nome_empresa: 'Mills Estruturas e Serviços de Engenharia S.A.',
      acao: 'MILS3',
      variacao_dia_perc: 0.0081967525,
      valor_final: 6.15,
      valor_abertura: 6.1
    },
    {
      nome_empresa: 'Minerva S.A.',
      acao: 'BEEF3',
      variacao_dia_perc: 0.013623944,
      valor_final: 11.16,
      valor_abertura: 11.01
    },
    {
      nome_empresa: 'Minupar Participações S.A.',
      acao: 'MNPR3',
      variacao_dia_perc: -0.001694954,
      valor_final: 5.89,
      valor_abertura: 5.9
    },
    {
      nome_empresa: 'Mitre Realty Empreendimentos e Participações S.A.',
      acao: 'MTRE3',
      variacao_dia_perc: 0.005287504,
      valor_final: 15.21,
      valor_abertura: 15.13
    },
    {
      nome_empresa: 'MMX Mineração e Metálicos S.A.',
      acao: 'MMXM11',
      variacao_dia_perc: 2.497608,
      valor_final: 7.31,
      valor_abertura: 2.09
    },
    {
      nome_empresa: 'MMX Mineração e Metálicos S.A.',
      acao: 'MMXM3',
      variacao_dia_perc: 1.2346368,
      valor_final: 36.0,
      valor_abertura: 16.11
    },
    {
      nome_empresa: 'Monteiro Aranha S.A.',
      acao: 'MOAR3',
      variacao_dia_perc: 0.0,
      valor_final: 208.99,
      valor_abertura: 208.99
    },
    {
      nome_empresa: 'Moura Dubeux Engenharia S.A.',
      acao: 'MDNE3',
      variacao_dia_perc: 0.013513501,
      valor_final: 12.0,
      valor_abertura: 11.84
    },
    {
      nome_empresa: 'Movida Participações S.A.',
      acao: 'MOVI3',
      variacao_dia_perc: -0.0028249235,
      valor_final: 17.65,
      valor_abertura: 17.7
    },
    {
      nome_empresa: 'MRS Logística S.A.',
      acao: 'MRSA5B',
      variacao_dia_perc: 0.0,
      valor_final: 20.0,
      valor_abertura: 20.0
    },
    {
      nome_empresa: 'MRV Engenharia e Participações S.A.',
      acao: 'MRVE3',
      variacao_dia_perc: -0.021929806,
      valor_final: 17.84,
      valor_abertura: 18.24
    },
    {
      nome_empresa: 'Multiplan Empreendimentos Imobiliários S.A.',
      acao: 'MULT3',
      variacao_dia_perc: -0.009831507,
      valor_final: 21.15,
      valor_abertura: 21.36
    }
  ];

  public organizeAcoes(num) {
    if (num === 1) {
      // tslint:disable-next-line: only-arrow-functions
      this.acoes = this.acoes.sort(function(a, b) {
        return a.variacao_dia_perc < b.variacao_dia_perc ? 1 : a.variacao_dia_perc > b.variacao_dia_perc ? -1 : 0;
      });
    // tslint:disable-next-line: triple-equals
    } else if (num == 2) {
      // tslint:disable-next-line: only-arrow-functions
      this.acoes = this.acoes.sort(function(a, b) {
        return a.valor_abertura < b.valor_abertura ? 1 : a.valor_abertura > b.valor_abertura ? -1 : 0;
      });
    // tslint:disable-next-line: triple-equals
    } else if (num == 3) {
      // tslint:disable-next-line: only-arrow-functions
      this.acoes = this.acoes.sort(function(a, b) {
        return a.valor_final < b.valor_final ? 1 : a.valor_final > b.valor_final ? -1 : 0;
      });
    } else {
      this.acoes = this.acoes.sort();
    }
  }

  ngOnInit() {
  }
}
