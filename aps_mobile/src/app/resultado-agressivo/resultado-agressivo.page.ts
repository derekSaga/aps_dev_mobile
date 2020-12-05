import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import {PersistenciaService, Name} from '../services/persistencia.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-resultado-agressivo',
  templateUrl: './resultado-agressivo.page.html',
  styleUrls: ['./resultado-agressivo.page.scss'],
})
export class ResultadoAgressivoPage implements OnInit {

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
      lines = doc.splitTextToSize('Pense no perfil agressivo não como alguém que “rasga dinheiro”. Pelo contrário: é alguém que tolera riscos, por ser o caminho que permitirá a ele potencializar seus resultados. Um investidor com perfil agressivo pode conviver com as oscilações naturais do mercado', maxLength);
      
      doc.text(lines,10, 30);

      lines = doc.splitTextToSize('Em função dessas características, nada mais natural do que esse investidor ser quem melhor se identifica com a renda variável. Ele sabe que as oscilações fazem parte das características do mercado e dos ativos e, considerando o longo prazo, sabe também que elas são importantes para a valorização do seu investimento.', maxLength);
      
      doc.text(lines,10, 60);

      lines = doc.splitTextToSize('Vamos recorrer a um exemplo para que você entenda melhor. Imagine um gráfico que ilustre um investimento em ações ao longo dos anos que vá de 0 a 100. Olhando de longe para ele, a impressão é que houve um movimento constante.', maxLength);
      
      doc.text(lines,10, 95);

      lines = doc.splitTextToSize('Entretanto, quando você se aproxima, vê um movimento bastante peculiar, quase um zigue-zague, com os valores oscilando para cima e para baixo.', maxLength);
      
      doc.text(lines,10, 125); 

      lines = doc.splitTextToSize('Mas, no final do ciclo, sempre oscilando mais para cima do que para baixo, a ponto de se configurar uma evolução.', maxLength);
      
      doc.text(lines,10, 145);

      lines = doc.splitTextToSize('Agora, pense que cada oscilação para baixo, na realidade de uma empresa, representou um ciclo de desvalorização de seus ativos e, durante esse período, as ações chegaram a perder cerca de 20% de seu valor.', maxLength);
      
      doc.text(lines,10, 165);

      lines = doc.splitTextToSize('Para o investidor iniciante, isso pode representar a senha para vender os ativos e se livrar daquele negócio o quanto antes, pois a tendência é perder dinheiro.', maxLength);
      
      doc.text(lines,10, 190); 

      lines = doc.splitTextToSize('Não é assim para o investidor agressivo, porque ele acredita que o padrão será ascendente e que é uma questão de tempo até os resultados aparecerem.', maxLength);
      
      doc.text(lines,10, 215);
      
      lines = doc.splitTextToSize('O investidor agressivo geralmente tem mais conhecimento sobre o mercado que os demais.', maxLength);
      
      doc.text(lines,10, 240);

      lines = doc.splitTextToSize('Esse perfil assume riscos sabendo onde está pisando e se prepara para eles. Não confunda isso com irresponsabilidade.', maxLength);
      
      doc.text(lines,10, 260);

      lines = doc.splitTextToSize('Neste caso, agressividade tem muito mais a ver com estudo, e ousadia, do que com aposta.', maxLength);
      
      doc.text(lines,10, 280);

      doc.addPage();

      centeredText("Confira a lista de opções abaixo que o perfil agressivo mais investe:", 10);

      doc.setFontType("italic");
      
      doc.text("Ações",10, 30);
      doc.text("Trader",10, 50);
      doc.text("BDR",10, 70);
      doc.text("Fundos Imobiliários",10, 90);
      doc.text("Mercado futuro",10, 110);
      doc.text("Debentures",10, 130);
      doc.text("CRI/ CRA",10, 150);
      doc.text("Fundos multimercado",10, 170);
    }

    if(prazo == "Longo"){
      lines = doc.splitTextToSize('Perfil agressivo de investidor é o nome dado àqueles que buscam aumentar seu patrimônio, ainda que isto signifique correr mais riscos e enfrentar perdas de curto prazo ocasionais.', maxLength);
      doc.text(lines,10, 30);

      lines = doc.splitTextToSize('Inclusive porque o risco e o rendimento de aplicações financeiras tendem a ser proporcionais. Quanto maior o risco, maior o potencial de retorno.', maxLength);
      doc.text(lines,10, 55);

      lines = doc.splitTextToSize('Logo, o perfil investidor agressivo costuma estar preparado para eventuais quedas de valores das suas ações e inclusive aproveitar alguns momentos de queda para comprar mais.', maxLength);
      doc.text(lines,10, 75);

      lines = doc.splitTextToSize('É comum que este investidor seja mais experiente, conhecendo melhor o funcionamento do mercado financeiro.', maxLength);
      doc.text(lines,10, 100);

      centeredText("Confira a lista de opções abaixo que o perfil agressivo mais investe:", 130);

      doc.setFontType("italic");
      
      doc.text("Ações",10, 150);
      doc.text("BDRs",10, 170);
      doc.text("Mercado Futuro",10, 190);
      doc.text("Operações Estruturadas com Opções",10, 210);
    }

    if(prazo == "Medio"){
      lines = doc.splitTextToSize('O investidor com perfil agressivo tem um conhecimento maior do mercado financeiro. Ele entende a volatilidade do mercado e as oscilações sabendo que o benefício é de longo prazo.', maxLength);
      doc.text(lines,10, 30);

      lines = doc.splitTextToSize('A expectativa de retorno desse tipo de investidor é bastante alta, e ele não pode continuar diminuindo a economia.', maxLength);
      doc.text(lines,10, 55);

      lines = doc.splitTextToSize('Com esse cenário de juros baixos que estamos vivendo, os investidores buscam por investimentos de maior risco com expectativa de melhor retorno.', maxLength);
      doc.text(lines,10, 75);

      lines = doc.splitTextToSize('Mas cuidado: se você se desespera com a primeira queda, esse não é o seu perfil. Afinal, risco / retorno são diretamente proporcionais: quanto maior o rendimento, maior o risco atrelado a ele.', maxLength);
      doc.text(lines,10, 100);

      centeredText("Confira a lista de opções abaixo que o perfil agressivo mais investe:", 135);

      doc.setFontType("italic");
      
      doc.text("Debentures",10, 155);
      doc.text("COE",10, 175);
      doc.text("CRI/ CRA",10, 195);
      doc.text("Fundos multimercado",10, 215);
    }

    if(prazo == "Curto"){
      lines = doc.splitTextToSize('O investidor com perfil agressivo tem um conhecimento maior do mercado financeiro. Ele entende a volatilidade do mercado e as oscilações sabendo que o benefício é de longo prazo.', maxLength);
      doc.text(lines,10, 30);

      lines = doc.splitTextToSize('A expectativa de retorno desse tipo de investidor é bastante alta, e ele não pode continuar diminuindo a economia.', maxLength);
      doc.text(lines,10, 55);

      lines = doc.splitTextToSize('Com esse cenário de juros baixos que estamos vivendo, os investidores buscam por investimentos de maior risco com expectativa de melhor retorno.', maxLength);
      doc.text(lines,10, 75);

      lines = doc.splitTextToSize('Mas cuidado: se você se desespera com a primeira queda, esse não é o seu perfil. Afinal, risco / retorno são diretamente proporcionais: quanto maior o rendimento, maior o risco atrelado a ele.', maxLength);
      doc.text(lines,10, 100);

      doc.setFontType("italic");
      centeredText("Não é comum um perfil Agressivo investir a curto prazo!", 135);

    }
    doc.save('investimentos.pdf');
  }

}
