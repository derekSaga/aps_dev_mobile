import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-resultado-iniciante',
  templateUrl: './resultado-iniciante.page.html',
  styleUrls: ['./resultado-iniciante.page.scss'],
})
export class ResultadoIniciantePage implements OnInit {

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  /*https://www.youtube.com/watch?v=AdoPkp4KzFA -> antigo teste*/

  //https://mrrio.github.io/ -> tudo que podemos alterar
  public async gerarPDF(nome, tipo) {
    const doc = new jsPDF();
    var centeredText = function (text, y) {
      var textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
      var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
      doc.text(textOffset, y, text);
    }
    centeredText(nome + ", seu perfil de investimento é " + tipo + "!", 10);
    doc.text("Para pessoas com o seu perfil de investimentos recomendamos as Seguintes", 10, 30);
    doc.text("aplicações para investir:", 10, 40);

    doc.setFontType("bold");
    doc.text("Curto prazo:", 10, 60);
    doc.setFontType("italic");
    doc.text("Tesouro Direto - 34% do seu capital para investimento", 10, 70);
    doc.setFontType("italic");
    doc.text("CDB - 33% do seu capital para investimento", 10, 80);
    doc.setFontType("italic");
    doc.text("Fundos de investimentos em renda fixa - 33% do seu capital para investimento", 10, 90);

    doc.setFontType("bold");
    doc.text("Médio prazo e Longo prazo:", 10, 110);
    doc.setFontType("italic");
    doc.text("Para este perfil recomendamos apenas aplicações a curto prazo para que o ", 10, 120);
    doc.setFontType("italic");
    doc.text("aplicante consiga estudar neste meio tempo e passar para outro tipo de perfil.", 10, 130);
    doc.save('test.pdf');
  }

}
