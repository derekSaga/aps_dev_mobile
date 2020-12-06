import { Storage } from '@ionic/storage';
import { AcaoSearchAddressResult } from './../../types/acaoSearchAddressResult.d';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AcaoSearchResult } from 'src/app/types/acaoSearchResult';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {
  public acoes: AcaoSearchResult[] = [];
  public controll = false;
 ​
  constructor(private http: HttpClient, private storage: Storage, private alertController: AlertController) {
    this.loadData();
  }

  async presentAlert(msg_hearder: string, msg_subtitle: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: msg_hearder,
      subHeader: msg_subtitle,
      message: msg,
      buttons: ['OK']
    });
    
    await alert.present();
  }

  async presentAlertUpdatePage(msg_hearder: string, msg_subtitle: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: msg_hearder,
      subHeader: msg_subtitle,
      message: msg,
      buttons: [
        {
          text: 'OK',
          handler: () => {window.location.reload()}
        }
      ]
    });
    
    await alert.present();
  }

  private async loadData(){
    const loaded = await this.storage.get('acoes');
    this.acoes.push(...loaded);
  }

  private async saveData(){
    this.storage.set('acoes', this.acoes);
  }

  public remoteQuote(quote: AcaoSearchResult){
    const search = this.acoes.find(x => x.quoteResponse.result[0].symbol == quote.quoteResponse.result[0].symbol);
    if(search == undefined){
      this.presentAlert('Alerta', 'Remover Ação a Lista', 'Ação não encontrada.');
    }else{
      this.acoes = this.acoes.filter(x => x.quoteResponse.result[0].symbol != quote.quoteResponse.result[0].symbol);
      this.saveData();
      this.loadData();
      this.presentAlertUpdatePage('Alerta', 'Remover Ação a Lista', 'Ação '+search.quoteResponse.result[0].symbol+' removida.');
    }
  }

  public addQuote(quote: AcaoSearchResult){
    const search = this.acoes.find(x => x.quoteResponse.result[0].symbol == quote.quoteResponse.result[0].symbol);
    if(search == undefined){
      this.acoes.push(quote);
      this.saveData();
      this.presentAlert('Alerta', 'Adicionar Ação a Lista', 'Ação adicionada com sucesso.');
    }else{
      console.log(quote.quoteResponse.result[0].symbol);
      this.presentAlert('Alerta', 'Adicionar Ação a Lista', 'Está ação já está na lista.');
    }
  }

  public get_finance(quote_name: string) {
    try {
      const url = '//cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v7/finance/quote?symbols=' + quote_name + '.SA';
      return this.http.get(url).toPromise() as Promise<AcaoSearchResult>;
    } catch (error) {
      return null;
    }
  }

  public get_address_quote(quote_name: string) {
    try {
      const url = '//cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v10/finance/quoteSummary/' + quote_name + '.sa?modules=assetProfile%2CearningsHistory';
      return this.http.get(url).toPromise() as Promise<AcaoSearchAddressResult>;
    } catch (error) {
      return null;
    }
  }

  public parseQuoteResult(quote: AcaoSearchResult){
    return quote.quoteResponse.result[0]
  }

  public parseAddressResult(quoteAddress: AcaoSearchAddressResult){
    return quoteAddress.quoteSummary.result[0].assetProfile;
  }


}
