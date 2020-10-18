import { Component, OnInit } from '@angular/core';

export const acoes = [{
  'nome_empresa': 'Metalurgica Gerdau S.A.',
  'acao': 'GOAU3',
  'variacao_dia_perc': 0.011574008,
  'valor_final': 8.74,
  'valor_abertura': 8.64,
  'endereco': 'Avenida Farrapos 1811',
  'cidade': 'Porto Alegre',
  'estado': 'RS',
  'site': 'http://www.gerdau.com',
  'industria': 'Steel',
  'setor': 'Basic Materials'
},
{
  'nome_empresa': 'Metalurgica Gerdau S.A.',
  'acao': 'GOAU4',
  'variacao_dia_perc': 0.02618321,
  'valor_final': 10.19,
  'valor_abertura': 9.93,
  'endereco': 'Avenida Farrapos 1811',
  'cidade': 'Porto Alegre',
  'estado': 'RS',
  'site': 'http://www.gerdau.com',
  'industria': 'Steel',
  'setor': 'Basic Materials'
},
{
  'nome_empresa': 'Metalúrgica Riosulense S.A.',
  'acao': 'RSUL4',
  'variacao_dia_perc': 0.0,
  'valor_final': 214.0,
  'valor_abertura': 214.0,
  'endereco': 'Rua EmÃ\xadlio Adami, 700',
  'cidade': 'Rio do Sul',
  'estado': 'SC',
  'site': 'http://www.riosulense.com.br',
  'industria': 'Auto Parts',
  'setor': 'Consumer Cyclical'
},
{
  'nome_empresa': 'METISA Metalúrgica Timboense S.A.',
  'acao': 'MTSA3',
  'variacao_dia_perc': 0.0,
  'valor_final': 35.0,
  'valor_abertura': 35.0,
  'endereco': 'Rua Fritz Lorenz, 2442',
  'cidade': 'Timbo',
  'estado': 'SC',
  'site': 'http://www.metisa.com.br',
  'industria': 'Farm & Heavy Construction Machinery',
  'setor': 'Industrials'
},
{
  'nome_empresa': 'METISA Metalúrgica Timboense S.A.',
  'acao': 'MTSA4',
  'variacao_dia_perc': 0.038418528,
  'valor_final': 27.84,
  'valor_abertura': 26.81,
  'endereco': 'Rua Fritz Lorenz, 2442',
  'cidade': 'Timbo',
  'estado': 'SC',
  'site': 'http://www.metisa.com.br',
  'industria': 'Farm & Heavy Construction Machinery',
  'setor': 'Industrials'
},
{
  'nome_empresa': 'Mills Estruturas e Serviços de Engenharia S.A.',
  'acao': 'MILS3',
  'variacao_dia_perc': 0.12521155,
  'valor_final': 6.65,
  'valor_abertura': 5.91,
  'endereco': 'Estrada do GuerenguÃª, 1381',
  'cidade': 'Rio de Janeiro',
  'estado': 'RJ',
  'site': 'http://www.mills.com.br',
  'industria': 'Engineering & Construction',
  'setor': 'Industrials'
},
{
  'nome_empresa': 'Minerva S.A.',
  'acao': 'BEEF3',
  'variacao_dia_perc': 0.011534975,
  'valor_final': 11.4,
  'valor_abertura': 11.27,
  'endereco': 'Avenida AntÃ´nio ManÃ§o Bernardes s/nÂº',
  'cidade': 'Barretos',
  'estado': 'SP',
  'site': 'http://portal.minervafoods.com',
  'industria': 'Farm Products',
  'setor': 'Consumer Defensive'
},
{
  'nome_empresa': 'Minupar Participações S.A.',
  'acao': 'MNPR3',
  'variacao_dia_perc': -0.017211687,
  'valor_final': 5.71,
  'valor_abertura': 5.81,
  'endereco': 'Av. Senador Alberto Pasqualini, 1535',
  'cidade': 'Lajeado',
  'estado': 'RS',
  'site': 'http://www.minupar.com.br',
  'industria': 'Farm Products',
  'setor': 'Consumer Defensive'
},
{
  'nome_empresa': 'Mitre Realty Empreendimentos e Participações S.A.',
  'acao': 'MTRE3',
  'variacao_dia_perc': 0.013468,
  'valor_final': 15.05,
  'valor_abertura': 14.85,
  'endereco': 'Alameda Santos, No. 700',
  'cidade': 'Sao Paulo',
  'estado': 'SP',
  'site': 'http://mitrerealty.com.br',
  'industria': 'Real Estate—Development',
  'setor': 'Real Estate'
},
{
  'nome_empresa': 'MMX Mineração e Metálicos S.A.',
  'acao': 'MMXM11',
  'variacao_dia_perc': 2.2481754,
  'valor_final': 4.45,
  'valor_abertura': 1.3699999,
  'endereco': 'Rua Lauro Muller',
  'cidade': 'Rio de Janeiro',
  'estado': 'RJ',
  'site': 'http://www.mmx.com.br',
  'industria': 'Other Industrial Metals & Mining',
  'setor': 'Basic Materials'
},
{
  'nome_empresa': 'MMX Mineração e Metálicos S.A.',
  'acao': 'MMXM3',
  'variacao_dia_perc': 0.6853932,
  'valor_final': 18.0,
  'valor_abertura': 10.68,
  'endereco': 'Rua Lauro Muller',
  'cidade': 'Rio de Janeiro',
  'estado': 'RJ',
  'site': 'http://www.mmx.com.br',
  'industria': 'Other Industrial Metals & Mining',
  'setor': 'Basic Materials'
},
{
  'nome_empresa': 'Monteiro Aranha S.A.',
  'acao': 'MOAR3',
  'variacao_dia_perc': -0.0054069804,
  'valor_final': 207.86,
  'valor_abertura': 208.99,
  'endereco': 'Av. AfrÃ¢nio de Melo Franco, 290, pav. L2',
  'cidade': 'Rio de Janeiro',
  'estado': 'RJ',
  'site': 'http://www.monteiroaranha.com.br',
  'industria': 'Conglomerates',
  'setor': 'Industrials'
},
{
  'nome_empresa': 'Moura Dubeux Engenharia S.A.',
  'acao': 'MDNE3',
  'variacao_dia_perc': -0.0060501033,
  'valor_final': 11.5,
  'valor_abertura': 11.57,
  'endereco': 'Avenida Engenheiro Domingos Ferreira',
  'cidade': 'Recife',
  'estado': 'PE',
  'site': 'http://www.mouradubeux.com.br',
  'industria': 'Real Estate Services',
  'setor': 'Real Estate'
},
{
  'nome_empresa': 'Movida Participações S.A.',
  'acao': 'MOVI3',
  'variacao_dia_perc': 0.13647057,
  'valor_final': 19.32,
  'valor_abertura': 17.0,
  'endereco': 'Rua Dr. Renato Paes de Barros, 1017',
  'cidade': 'SÃ£o Paulo',
  'estado': 'SP',
  'site': 'http://ri.movida.com.br',
  'industria': 'Rental & Leasing Services',
  'setor': 'Industrials'
},
{
  'nome_empresa': 'MRV Engenharia e Participações S.A.',
  'acao': 'MRVE3',
  'variacao_dia_perc': 0.08149916,
  'valor_final': 18.18,
  'valor_abertura': 16.81,
  'endereco': '621 Professor MÃ¡rio Werneck Avenue',
  'cidade': 'Belo Horizonte',
  'estado': 'MG',
  'site': 'http://www.mrv.com.br',
  'industria': 'Residential Construction',
  'setor': 'Consumer Cyclical'
},
{
  'nome_empresa': 'Multiplan Empreendimentos Imobiliários S.A.',
  'acao': 'MULT3',
  'variacao_dia_perc': -0.031959265,
  'valor_final': 20.9,
  'valor_abertura': 21.59,
  'endereco': 'Avenida das Americas, 4.200',
  'cidade': 'Rio de Janeiro',
  'estado': 'RJ',
  'site': 'http://www.multiplan.com.br',
  'industria': 'Real Estate Services',
  'setor': 'Real Estate'
}];

@Component({
  selector: 'app-todas',
  templateUrl: './todas.page.html',
  styleUrls: ['./todas.page.scss'],
})


export class TodasPage implements OnInit {

  public acaoAtual = 0;

  public acoes = [{
    'nome_empresa': 'Metalurgica Gerdau S.A.',
    'acao': 'GOAU3',
    'variacao_dia_perc': 0.011574008,
    'valor_final': 8.74,
    'valor_abertura': 8.64,
    'endereco': 'Avenida Farrapos 1811',
    'cidade': 'Porto Alegre',
    'estado': 'RS',
    'site': 'http://www.gerdau.com',
    'industria': 'Steel',
    'setor': 'Basic Materials'
  },
  {
    'nome_empresa': 'Metalurgica Gerdau S.A.',
    'acao': 'GOAU4',
    'variacao_dia_perc': 0.02618321,
    'valor_final': 10.19,
    'valor_abertura': 9.93,
    'endereco': 'Avenida Farrapos 1811',
    'cidade': 'Porto Alegre',
    'estado': 'RS',
    'site': 'http://www.gerdau.com',
    'industria': 'Steel',
    'setor': 'Basic Materials'
  },
  {
    'nome_empresa': 'Metalúrgica Riosulense S.A.',
    'acao': 'RSUL4',
    'variacao_dia_perc': 0.0,
    'valor_final': 214.0,
    'valor_abertura': 214.0,
    'endereco': 'Rua EmÃ\xadlio Adami, 700',
    'cidade': 'Rio do Sul',
    'estado': 'SC',
    'site': 'http://www.riosulense.com.br',
    'industria': 'Auto Parts',
    'setor': 'Consumer Cyclical'
  },
  {
    'nome_empresa': 'METISA Metalúrgica Timboense S.A.',
    'acao': 'MTSA3',
    'variacao_dia_perc': 0.0,
    'valor_final': 35.0,
    'valor_abertura': 35.0,
    'endereco': 'Rua Fritz Lorenz, 2442',
    'cidade': 'Timbo',
    'estado': 'SC',
    'site': 'http://www.metisa.com.br',
    'industria': 'Farm & Heavy Construction Machinery',
    'setor': 'Industrials'
  },
  {
    'nome_empresa': 'METISA Metalúrgica Timboense S.A.',
    'acao': 'MTSA4',
    'variacao_dia_perc': 0.038418528,
    'valor_final': 27.84,
    'valor_abertura': 26.81,
    'endereco': 'Rua Fritz Lorenz, 2442',
    'cidade': 'Timbo',
    'estado': 'SC',
    'site': 'http://www.metisa.com.br',
    'industria': 'Farm & Heavy Construction Machinery',
    'setor': 'Industrials'
  },
  {
    'nome_empresa': 'Mills Estruturas e Serviços de Engenharia S.A.',
    'acao': 'MILS3',
    'variacao_dia_perc': 0.12521155,
    'valor_final': 6.65,
    'valor_abertura': 5.91,
    'endereco': 'Estrada do GuerenguÃª, 1381',
    'cidade': 'Rio de Janeiro',
    'estado': 'RJ',
    'site': 'http://www.mills.com.br',
    'industria': 'Engineering & Construction',
    'setor': 'Industrials'
  },
  {
    'nome_empresa': 'Minerva S.A.',
    'acao': 'BEEF3',
    'variacao_dia_perc': 0.011534975,
    'valor_final': 11.4,
    'valor_abertura': 11.27,
    'endereco': 'Avenida AntÃ´nio ManÃ§o Bernardes s/nÂº',
    'cidade': 'Barretos',
    'estado': 'SP',
    'site': 'http://portal.minervafoods.com',
    'industria': 'Farm Products',
    'setor': 'Consumer Defensive'
  },
  {
    'nome_empresa': 'Minupar Participações S.A.',
    'acao': 'MNPR3',
    'variacao_dia_perc': -0.017211687,
    'valor_final': 5.71,
    'valor_abertura': 5.81,
    'endereco': 'Av. Senador Alberto Pasqualini, 1535',
    'cidade': 'Lajeado',
    'estado': 'RS',
    'site': 'http://www.minupar.com.br',
    'industria': 'Farm Products',
    'setor': 'Consumer Defensive'
  },
  {
    'nome_empresa': 'Mitre Realty Empreendimentos e Participações S.A.',
    'acao': 'MTRE3',
    'variacao_dia_perc': 0.013468,
    'valor_final': 15.05,
    'valor_abertura': 14.85,
    'endereco': 'Alameda Santos, No. 700',
    'cidade': 'Sao Paulo',
    'estado': 'SP',
    'site': 'http://mitrerealty.com.br',
    'industria': 'Real Estate—Development',
    'setor': 'Real Estate'
  },
  {
    'nome_empresa': 'MMX Mineração e Metálicos S.A.',
    'acao': 'MMXM11',
    'variacao_dia_perc': 2.2481754,
    'valor_final': 4.45,
    'valor_abertura': 1.3699999,
    'endereco': 'Rua Lauro Muller',
    'cidade': 'Rio de Janeiro',
    'estado': 'RJ',
    'site': 'http://www.mmx.com.br',
    'industria': 'Other Industrial Metals & Mining',
    'setor': 'Basic Materials'
  },
  {
    'nome_empresa': 'MMX Mineração e Metálicos S.A.',
    'acao': 'MMXM3',
    'variacao_dia_perc': 0.6853932,
    'valor_final': 18.0,
    'valor_abertura': 10.68,
    'endereco': 'Rua Lauro Muller',
    'cidade': 'Rio de Janeiro',
    'estado': 'RJ',
    'site': 'http://www.mmx.com.br',
    'industria': 'Other Industrial Metals & Mining',
    'setor': 'Basic Materials'
  },
  {
    'nome_empresa': 'Monteiro Aranha S.A.',
    'acao': 'MOAR3',
    'variacao_dia_perc': -0.0054069804,
    'valor_final': 207.86,
    'valor_abertura': 208.99,
    'endereco': 'Av. AfrÃ¢nio de Melo Franco, 290, pav. L2',
    'cidade': 'Rio de Janeiro',
    'estado': 'RJ',
    'site': 'http://www.monteiroaranha.com.br',
    'industria': 'Conglomerates',
    'setor': 'Industrials'
  },
  {
    'nome_empresa': 'Moura Dubeux Engenharia S.A.',
    'acao': 'MDNE3',
    'variacao_dia_perc': -0.0060501033,
    'valor_final': 11.5,
    'valor_abertura': 11.57,
    'endereco': 'Avenida Engenheiro Domingos Ferreira',
    'cidade': 'Recife',
    'estado': 'PE',
    'site': 'http://www.mouradubeux.com.br',
    'industria': 'Real Estate Services',
    'setor': 'Real Estate'
  },
  {
    'nome_empresa': 'Movida Participações S.A.',
    'acao': 'MOVI3',
    'variacao_dia_perc': 0.13647057,
    'valor_final': 19.32,
    'valor_abertura': 17.0,
    'endereco': 'Rua Dr. Renato Paes de Barros, 1017',
    'cidade': 'SÃ£o Paulo',
    'estado': 'SP',
    'site': 'http://ri.movida.com.br',
    'industria': 'Rental & Leasing Services',
    'setor': 'Industrials'
  },
  {
    'nome_empresa': 'MRV Engenharia e Participações S.A.',
    'acao': 'MRVE3',
    'variacao_dia_perc': 0.08149916,
    'valor_final': 18.18,
    'valor_abertura': 16.81,
    'endereco': '621 Professor MÃ¡rio Werneck Avenue',
    'cidade': 'Belo Horizonte',
    'estado': 'MG',
    'site': 'http://www.mrv.com.br',
    'industria': 'Residential Construction',
    'setor': 'Consumer Cyclical'
  },
  {
    'nome_empresa': 'Multiplan Empreendimentos Imobiliários S.A.',
    'acao': 'MULT3',
    'variacao_dia_perc': -0.031959265,
    'valor_final': 20.9,
    'valor_abertura': 21.59,
    'endereco': 'Avenida das Americas, 4.200',
    'cidade': 'Rio de Janeiro',
    'estado': 'RJ',
    'site': 'http://www.multiplan.com.br',
    'industria': 'Real Estate Services',
    'setor': 'Real Estate'
  }];

  public organizeAcoes(num) {
    if (num === 1) {
      // tslint:disable-next-line: only-arrow-functions
      this.acoes = this.acoes.sort(function (a, b) {
        return a.variacao_dia_perc < b.variacao_dia_perc ? 1 : a.variacao_dia_perc > b.variacao_dia_perc ? -1 : 0;
      });
      // tslint:disable-next-line: triple-equals
    } else if (num == 2) {
      // tslint:disable-next-line: only-arrow-functions
      this.acoes = this.acoes.sort(function (a, b) {
        return a.valor_abertura < b.valor_abertura ? 1 : a.valor_abertura > b.valor_abertura ? -1 : 0;
      });
      // tslint:disable-next-line: triple-equals
    } else if (num == 3) {
      // tslint:disable-next-line: only-arrow-functions
      this.acoes = this.acoes.sort(function (a, b) {
        return a.valor_final < b.valor_final ? 1 : a.valor_final > b.valor_final ? -1 : 0;
      });
    } else {
      this.acoes = this.acoes.sort();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
