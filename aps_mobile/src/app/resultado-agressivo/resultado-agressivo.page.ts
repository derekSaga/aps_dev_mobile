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
    doc.text("Para pessoas com o seu perfil de investimentos recomendamos as Seguintes", 10, 30);
    doc.text("aplicações para investir:", 10, 40);

    if(prazo == "asd" || prazo == "Agressivo"){
      doc.setFontType("bold");
      doc.text("Curto prazo:", 10, (prazo=="Agressivo"?60:90));
      doc.setFontType("italic");
      doc.text("Perfis agressivos tendem a não possuir investimentos a curto prazo.", 10, 70);
    }

    doc.setFontType("bold");
    doc.text("Médio prazo:", 10, 90);
    doc.setFontType("italic");
    doc.text("Fundos Multimercado - 25% do seu capital para investimento", 10, 100);
    doc.setFontType("italic");
    doc.text("Debêntures - 25% do seu capital para investimento", 10, 110);
    doc.setFontType("italic");
    doc.text("CRI/CRA - 25% do seu capital para investimento", 10, 120);
    doc.setFontType("italic");
    doc.text("COE - 25% do seu capital para investimento", 10, 130);

    doc.setFontType("bold");
    doc.text("Longo prazo:", 10, 150);
    doc.setFontType("italic");
    doc.text("Fundos Multimercado - 34% do seu capital para investimento", 10, 160);
    doc.setFontType("italic");
    doc.text("Debêntures - 33% do seu capital para investimento", 10, 170);
    doc.setFontType("italic");
    doc.text("CRI/CRA - 33% do seu capital para investimento", 10, 180);
    doc.save('investimentos.pdf');
  }

}
