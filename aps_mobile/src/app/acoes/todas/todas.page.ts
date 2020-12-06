import { AcaoSearchResult } from 'src/app/types/acaoSearchResult';
import { Component, OnInit } from '@angular/core';
import { AcoesService } from 'src/app/services/acoes/acoes.service';
import {​​​​​ ViewChild }​​​​​ from '@angular/core';
import {IonContent} from '@ionic/angular';
// import {​​​​​ Content }​​​​​ from '@ionic/angular';


@Component({
  selector: 'app-todas',
  templateUrl: './todas.page.html',
  styleUrls: ['./todas.page.scss'],
})


export class TodasPage implements OnInit {
  

  public acaoAtual = 0;

  acoes = this.acaoService.acoes;

  public organizeAcoes(num: number) {
    if (num === 1) {
      // tslint:disable-next-line: only-arrow-functions
      this.acoes = this.acoes.sort(function (a, b) {
        return a.quoteResponse.result[0].regularMarketChangePercent < b.quoteResponse.result[0].regularMarketChangePercent ? 1 : a.quoteResponse.result[0].regularMarketChangePercent > b.quoteResponse.result[0].regularMarketChangePercent ? -1 : 0;
      });
      // tslint:disable-next-line: triple-equals
    } else if (num == 2) {
      // tslint:disable-next-line: only-arrow-functions
      this.acoes = this.acoes.sort(function (a, b) {
        return a.quoteResponse.result[0].regularMarketPreviousClose < b.quoteResponse.result[0].regularMarketPreviousClose ? 1 : a.quoteResponse.result[0].regularMarketPreviousClose > b.quoteResponse.result[0].regularMarketPreviousClose ? -1 : 0;
      });
      // tslint:disable-next-line: triple-equals
    } else if (num == 3) {
      // tslint:disable-next-line: only-arrow-functions
      this.acoes = this.acoes.sort(function (a, b) {
        return a.quoteResponse.result[0].regularMarketPrice < b.quoteResponse.result[0].regularMarketPrice ? 1 : a.quoteResponse.result[0].regularMarketPrice > b.quoteResponse.result[0].regularMarketPrice ? -1 : 0;
      });
    } else {
      this.acoes = this.acoes.sort();
    }
  }

  public parseQuote(quote: AcaoSearchResult){
    const result = this.acaoService.parseQuoteResult(quote);
    return result;
  }

  public removeQuote(quote: AcaoSearchResult){
    this.acaoService.remoteQuote(quote);
  }
  
  constructor(private acaoService: AcoesService) { }

  ngOnInit() {
  }

}
