import { Component, OnInit } from '@angular/core';
import { acoes } from '../todas/todas.page.js';
import { getSingleStockInfo } from 'stock-info';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pesquisa-acoes',
  templateUrl: './pesquisa-acoes.page.html',
  styleUrls: ['./pesquisa-acoes.page.scss'],
})

export class PesquisaAcoesPage implements OnInit {
  // tslint:disable-next-line: variable-name
  public nomeAcao = '';
  public resultadoPesquisa = null;
  public endereco = null;
  public controll = false;

  public async get_finance(quote_name) {
    const url_finance = '//cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v7/finance/quote?symbols=' + quote_name + '.SA'
    try {
      let resultado_finance = await this.Http.get(url_finance).toPromise();
      resultado_finance = resultado_finance.quoteResponse.result[0];
      return resultado_finance;
    } catch (error) {
      return null;
    }
  }

  public async get_address(quote_name) {
    try {
      const address = '//cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v10/finance/quoteSummary/' + this.nomeAcao + '.sa?modules=assetProfile%2CearningsHistory'
      let resultado_address = await this.Http.get(address).toPromise();
      resultado_address = resultado_address.quoteSummary.result[0].assetProfile;
      
      return resultado_address;
    } catch (error) {
      return null;
    }
  }

  public async pesquisa_acao() {
    let resultado_finance = await this.get_finance(this.nomeAcao);
    let resultado_address = await this.get_address(this.nomeAcao);

    if (resultado_finance == null) {
      this.controll = false;
      this.resultadoPesquisa = 'Ação não encontrada';
    } else {
      this.controll = true;
      this.resultadoPesquisa = resultado_finance;
      this.endereco = resultado_address;
    }
    this.nomeAcao = '';
  }
  constructor(private Http: HttpClient) { }

  ngOnInit() {
  }

}
