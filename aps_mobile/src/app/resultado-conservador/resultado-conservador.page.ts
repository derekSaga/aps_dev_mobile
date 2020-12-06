import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import jsPDF from 'jspdf';
import {PersistenciaService, Name} from '../services/persistencia.service';

@Component({
  selector: 'app-resultado-conservador',
  templateUrl: './resultado-conservador.page.html',
  styleUrls: ['./resultado-conservador.page.scss'],
})
export class ResultadoConservadorPage implements OnInit {

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController,
    private persistenciaService: PersistenciaService
  ) { }

  public names = this.persistenciaService.all();

  ngOnInit() {
  }

  /*https://www.youtube.com/watch?v=AdoPkp4KzFA -> antigo teste*/

  //https://mrrio.github.io/ -> tudo que podemos alterar
  public async gerarPDF(nome, tipo, prazo) {
    const doc = new jsPDF();
    var centeredText = function (text, y) {
      var textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
      var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
      doc.text(textOffset, y, text);
    }
    centeredText(nome + ", seu perfil de investimento é " + tipo + "!", 10);
    //doc.text("Para pessoas com o seu perfil de investimentos recomendamos as Seguintes", 10, 30);
    var lines;
    var maxLength = doc.internal.pageSize.width-20;
    if(prazo == "Conservador"){
      lines = doc.splitTextToSize('Perfil de Investidor conservador busca a preservação de recursos, com tolerância zero a perda e alta liquidez', maxLength);
      doc.text(lines,10, 30);

      lines = doc.splitTextToSize('O investidor conservador é aquele que opta por ter uma maior segurança em seus investimentos. O princípio de mercado é que, quanto menos risco você tiver, menor será o seu potencial de ganho, assim como o seu potencial de perda.', maxLength);
      doc.text(lines,10, 50);

      lines = doc.splitTextToSize('No geral, o principal objetivo de um investidor conservador é preservar o seu patrimônio. Por isso, costuma preferir opções que apresentam um baixo risco, como os produtos de renda fixa e evita opções com baixa liquidez, bem como ativos que podem sofrer algum tipo de perda.', maxLength);
      doc.text(lines,10, 85);

      centeredText("Confira a lista de opções abaixo que o perfil Conservador mais investe:", 125);

      doc.setFontType("italic");
      
      doc.text("Tesouro IPCA",10, 145);
      doc.text("Fundos de crédito privado",10, 165);
      doc.text("Tesouro Selic",10, 185);
      doc.text("CDB de liquidez diaria",10, 205);
      doc.text("Fundos de Renda Fixa",10, 225);
    }

    if(prazo == "Longo"){
      lines = doc.splitTextToSize('Perfil de Investidor conservador busca a preservação de recursos, com tolerância zero a perda e alta liquidez', maxLength);
      doc.text(lines,10, 30);

      lines = doc.splitTextToSize('O que você precisa saber para investir a Longo Prazo:', maxLength);
      doc.text(lines,10, 50);

      lines = doc.splitTextToSize('Existem muitas vantagens no planejamento de investimentos a longo prazo. O maior deles é que a organização para um período maior permite uma melhor diversificação de sua carteira e, com isso, maiores ganhos e menos riscos.', maxLength);
      doc.text(lines,10, 65);

      lines = doc.splitTextToSize('Pontualmente, diversos investimentos com prazo maior tendem a cobrar menos Imposto de Renda e oferecer taxas de retorno superiores.', maxLength);
      doc.text(lines,10, 100);

      centeredText("Confira a lista de opções abaixo que o perfil agressivo mais investe:", 130);

      doc.setFontType("italic");
      
      doc.text("Tesouro IPCA",10, 150);
      doc.text("Fundos de crédito privado",10, 170);
    }

    if(prazo == "Medio"){
      lines = doc.splitTextToSize('Perfil de Investidor conservador busca a preservação de recursos, com tolerância zero a perda e alta liquidez', maxLength);
      doc.text(lines,10, 30);

      lines = doc.splitTextToSize('O que você precisa saber para investir a Médio Prazo:', maxLength);
      doc.text(lines,10, 50);

      lines = doc.splitTextToSize('Investimentos de médio prazo são aqueles cujo retorno será obtido, em média, entre dois e cinco anos – assim como o seu resgate. Em geral, os aportes são feitos pelo investidor que visa determinados objetivos no médio prazo, como viagens, a compra de um carro ou outro bem de alto valor, entre outros.', maxLength);
      doc.text(lines,10, 60);

      lines = doc.splitTextToSize('Para que estes objetivos possam ser alcançados por meio dos investimentos de médio prazo, e fundamental que o investidor realize os aportes de maneira correta, analisando a rentabilidade e a liquidez do investimento. Desta forma, ele evitará comprometer sua organização financeira e conseguirá atingir seus objetivos de maneira mais fácil e planejada.', maxLength);
      doc.text(lines,10, 95);

      lines = doc.splitTextToSize('Investir em determinados produtos de renda fixa, fundos multimercados, entre outros, por exemplo, podem ser boas opções de composição da sua carteira de investimentos de médio prazo.', maxLength);
      doc.text(lines,10, 135);

      centeredText("Confira a lista de opções abaixo:", 160);

      doc.setFontType("italic");
      
      doc.text("CDB",10, 180);
      doc.text("LCI, LCA, LC",10, 200);
      doc.text("Fundo crédito privado",10, 220);
    }

    if(prazo == "Curto"){
      lines = doc.splitTextToSize('Perfil de Investidor conservador busca a preservação de recursos, com tolerância zero a perda e alta liquidez', maxLength);
      doc.text(lines,10, 30);

      lines = doc.splitTextToSize('O que você precisa saber para investir a Curto Prazo:', maxLength);
      doc.text(lines,10, 50);

      lines = doc.splitTextToSize('Investimentos de curto prazo são aqueles cujo retorno será obtido, em média, entre um a dois anos – assim como o seu resgate. Em geral, os aportes são feitos pelo investidor que visa determinados objetivos a curto prazo, como objetos e metas pontuais.', maxLength);
      doc.text(lines,10, 65);

      lines = doc.splitTextToSize('Para que estes objetivos possam ser alcançados por meio dos investimentos de curto prazo, e fundamental que o investidor realize os aportes de maneira correta, analisando a rentabilidade e a liquidez do investimento. Desta forma, ele evitará comprometer sua organização financeira e conseguirá atingir seus objetivos de maneira mais fácil e planejada.', maxLength);
      doc.text(lines,10, 100);

      lines = doc.splitTextToSize('Investir em determinados produtos de renda fixa, fundos multimercados, entre outros, por exemplo, podem ser boas opções de composição da sua carteira de investimentos de curto prazo.', maxLength);
      doc.text(lines,10, 140);

      centeredText("Confira a lista de opções abaixo:", 170);

      doc.setFontType("italic");
      
      doc.text("Tesouro Selic",10, 190);
      doc.text("CDB de liquidez diaria",10, 210);
      doc.text("Fundos de Renda Fixa",10, 230);

    }
    doc.save('investimentos.pdf');
  }

}
