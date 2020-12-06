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
    doc.text("Fundo DI - 34% do seu capital para investimento", 10, 70);
    doc.setFontType("italic");
    doc.text("Fundo Crédito Privado - 33% do seu capital para investimento", 10, 80);
    doc.setFontType("italic");
    doc.text("Fundos Multimercado - 33% do seu capital para investimento", 10, 90);

    doc.setFontType("bold");
    doc.text("Médio prazo:", 10, 110);
    doc.setFontType("italic");
    doc.text("CDB - 25% do seu capital para investimento", 10, 120);
    doc.setFontType("italic");
    doc.text("Fundos Multimercado - 25% do seu capital para investimento", 10, 130);
    doc.setFontType("italic");
    doc.text("Tesouro IPCA - 25% do seu capital para investimento", 10, 140);
    doc.setFontType("italic");
    doc.text("CRI/CRA - 25% do seu capital para investimento", 10, 150);

    doc.setFontType("bold");
    doc.text("Longo prazo:", 10, 170);
    doc.setFontType("italic");
    doc.text("Fundos Multimercado - 25% do seu capital para investimento", 10, 180);
    doc.setFontType("italic");
    doc.text("Tesouro IPCA - 25% do seu capital para investimento", 10, 190);
    doc.setFontType("italic");
    doc.text("CRI/CRA - 25% do seu capital para investimento", 10, 200);
    doc.setFontType("italic");
    doc.text("COE - 25% do seu capital para investimento", 10, 210);
    doc.save('investimento.pdf');
  }

}
