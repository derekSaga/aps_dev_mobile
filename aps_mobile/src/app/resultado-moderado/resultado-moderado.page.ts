import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import jsPDF from 'jspdf';
import {PersistenciaService, Name} from '../services/persistencia.service';


@Component({
  selector: 'app-resultado-moderado',
  templateUrl: './resultado-moderado.page.html',
  styleUrls: ['./resultado-moderado.page.scss'],
})
export class ResultadoModeradoPage implements OnInit {

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
    if(prazo == "nsei"){
      lines = doc.splitTextToSize('Perfil moderado é caracterizado por investidores que não abrem mão de segurança nas suas aplicações, mas que estão dispostos a correr alguns riscos para melhorar a sua rentabilidade.', maxLength);
      doc.text(lines,10, 30);

      lines = doc.splitTextToSize('Logo, ele fica entre o conservador e o agressivo, sendo moderado por não estar tão avesso a riscos, mas mantendo a cautela para não sofrer prejuízos desnecessários.', maxLength);
      doc.text(lines,10, 60);

      lines = doc.splitTextToSize('Este perfil de investidor ainda não tem interesse em ter uma grande parcela em renda variável mas também entende que a renda fixa pode não potenciar os ganhos no longo prazo.', maxLength);
      doc.text(lines,10, 90);
      
      lines = doc.splitTextToSize('Sendo assim, separamos uma lista de possíveis investimentos para você.', maxLength);
      doc.text(lines,10, 120); 

      centeredText("Confira a lista de opções abaixo que o perfil moderado mais investe:", 135);

      doc.setFontType("italic");
      
      doc.text("Tesouro IPCA",10, 155);
      doc.text("CRI/ CRA",10, 175);
      doc.text("Fundos multimercado",10, 195);
      doc.text("Crédito Privado",10, 215);
      doc.text("DI",10, 235);
      doc.text("Multimercado",10, 255);
      doc.text("COE",10, 275);
    }

    if(prazo == "Longo"){
      lines = doc.splitTextToSize('Perfil moderado é caracterizado por investidores que não abrem mão de segurança nas suas aplicações, mas que estão dispostos a correr alguns riscos para melhorar a sua rentabilidade.', maxLength);
      doc.text(lines,10, 30);

      lines = doc.splitTextToSize('O que você precisa saber para investir a Longo Prazo:', maxLength);
      doc.text(lines,10, 55);

      lines = doc.splitTextToSize('Existem muitas vantagens no planejamento de investimentos a longo prazo. O maior deles é que a organização para um período maior permite uma melhor diversificação de sua carteira e, com isso, maiores ganhos e menos riscos.', maxLength);
      doc.text(lines,10, 70);

      lines = doc.splitTextToSize('Pontualmente, diversos investimentos com prazo maior tendem a cobrar menos Imposto de Renda e oferecer taxas de retorno superiores.', maxLength);
      doc.text(lines,10, 100);

      centeredText("Confira a lista de opções abaixo:", 120);

      doc.setFontType("italic");
      
      doc.text("Tesouro IPCA",10, 140);
      doc.text("Fundos multimercado",10, 160);
      doc.text("CRI/ CRA",10, 180);
      doc.text("COE",10, 200);
    }

    if(prazo == "Medio"){
      lines = doc.splitTextToSize('Perfil de Investidor Moderado busca a preservação de recursos, com tolerância zero a perda e alta liquidez', maxLength);
      doc.text(lines,10, 30);

      lines = doc.splitTextToSize('O que você precisa saber para investir a Médio Prazo:', maxLength);
      doc.text(lines,10, 50);

      lines = doc.splitTextToSize('Investimentos de médio prazo são aqueles cujo retorno será obtido, em média, entre dois e cinco anos – assim como o seu resgate. Em geral, os aportes são feitos pelo investidor que visa determinados objetivos no médio prazo, como viagens, a compra de um carro ou outro bem de alto valor, entre outros.', maxLength);
      doc.text(lines,10, 65);

      lines = doc.splitTextToSize('Para que estes objetivos possam ser alcançados por meio dos investimentos de médio prazo, e fundamental que o investidor realize os aportes de maneira correta, analisando a rentabilidade e a liquidez do investimento. Desta forma, ele evitará comprometer sua organização financeira e conseguirá atingir seus objetivos de maneira mais fácil e planejada.', maxLength);
      doc.text(lines,10, 105);

      lines = doc.splitTextToSize('Investir em determinados produtos de renda fixa, fundos multimercados, entre outros, por exemplo, podem ser boas opções de composição da sua carteira de investimentos de médio prazo.', maxLength);
      doc.text(lines,10, 155);

      centeredText("Confira a lista de opções abaixo:", 185);

      doc.setFontType("italic");
      
      doc.text("Tesouro IPCA",10, 205);
      doc.text("Fundos multimercado",10, 225);
      doc.text("CRI/ CRA",10, 245);
      doc.text("COE",10, 265);
    }

    if(prazo == "Curto"){
      lines = doc.splitTextToSize('Para pessoas com perfil Moderado, que já sabem o objetivo final dos seus investimentos e avaliaram que precisam de resultados em até 2 anos, temos algumas sujestões para investir da melhor forma, vendo o que realmente faz sentido para você.', maxLength);
      doc.text(lines,10, 30);

      lines = doc.splitTextToSize('O que você precisa saber para investir a Curto Prazo', maxLength);
      doc.text(lines,10, 65);

      lines = doc.splitTextToSize('Como aqui entram os objetivos a serem atingidos em um espaço curto de tempo, são duas as principais características de que devem ser analisadas: o risco e a liquidez.', maxLength);
      doc.text(lines,10, 80);

      lines = doc.splitTextToSize('É importante que seja possível resgatar o dinheiro e seus rendimentos no momento que desejar ou precisar, sem dificuldades – por isso, quanto maior a liquidez, melhor.', maxLength);
      doc.text(lines,10, 110);

      lines = doc.splitTextToSize('Em relação ao risco, ele é basicamente a incerteza que se pode ter em relação ao rendimento: quanto maior o risco, maiores as chances de ter uma rentabilidade maior e de ganhar muito dinheiro, mas também de se perder e ter uma rentabilidade negativa, por exemplo.', maxLength);
      doc.text(lines,10, 140);

      lines = doc.splitTextToSize('No caso de estratégias de curto prazo, o recomendado é que o risco seja baixo para que sejam evitadas possíveis perdas – e se garanta uma rentabilidade mínima e segura. Afinal, com um período curto de tempo, pode ser difícil recuperar rentabilidade perdida.', maxLength);
      doc.text(lines,10, 175);

      centeredText("Confira a lista de opções abaixo:", 210);

      doc.setFontType("italic");
      
      doc.text("DI",10, 230);
      doc.text("Crédito Privado",10, 250);
      doc.text("Fundos multimercado",10, 270);
    }
    doc.save('investimentos.pdf');
  }

}