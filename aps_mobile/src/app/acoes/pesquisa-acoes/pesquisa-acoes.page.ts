import { AcaoSearchAddressResult } from './../../types/acaoSearchAddressResult.d';
import { AcaoSearchResult } from './../../types/acaoSearchResult.d';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AcoesService } from 'src/app/services/acoes/acoes.service';

@Component({
  selector: 'app-pesquisa-acoes',
  templateUrl: './pesquisa-acoes.page.html',
  styleUrls: ['./pesquisa-acoes.page.scss'],
})

export class PesquisaAcoesPage implements OnInit {
  // tslint:disable-next-line: variable-name
  public nomeAcao = '';
  public quoteResult: AcaoSearchResult | null = null;
  public addressResult: AcaoSearchAddressResult | null = null;
  public controll = this.acaoService.controll;

  constructor(private Http: HttpClient, private acaoService: AcoesService) {
  }

 
  public async get_finance(quote_name: string) {
    const result = await this.acaoService.get_finance(quote_name)
    return result;
  }

  public async get_address(quote_name: string) {
    const result = await this.acaoService.get_address_quote(quote_name);
    return result;
  }

  public async pesquisa_acao() {
    let resultado_finance = await this.get_finance(this.nomeAcao);
    
    let resultado_address = await this.get_address(this.nomeAcao);

    try {
      this.controll = true;
      this.quoteResult = resultado_finance;
      this.addressResult = resultado_address;
      
    } catch (error) {
      this.controll = false;
      this.quoteResult = null;
    }
    this.nomeAcao = '';
  }
  public parseQuoteResult(){
    return this.acaoService.parseQuoteResult(this.quoteResult);
  }

  public parseAddressResult(){
    return this.acaoService.parseAddressResult(this.addressResult);
  }

  public saveQuote(){
    this.acaoService.addQuote(this.quoteResult);
    
  }
  

  ngOnInit() {
  }

}
