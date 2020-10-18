import { Component, OnInit} from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
  }

  /*https://www.youtube.com/watch?v=AdoPkp4KzFA -> antigo teste*/

  //https://mrrio.github.io/ -> tudo que podemos alterar
  public async gerarPDF(nome, tipo) {
    const doc = new jsPDF();
    var centeredText = function(text, y) {
      var textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor;
      var textOffset = (doc.internal.pageSize.width - textWidth) / 2;
      doc.text(textOffset, y, text);
  }
    centeredText(nome+", seu perfil de investimento é "+tipo+"!", 10);
    doc.text("Para pessoas com o seu perfil de investimentos recomendamos as Seguintes", 10, 30);
    doc.text("aplicações para investir:", 10, 40);
    
    doc.setFontType("bold");
    doc.text("Curto prazo:", 10, 60);
    doc.setFontType("italic");
    doc.text("Tesouro Selic - 34% do seu capital para investimento", 10, 70);
    doc.setFontType("italic");
    doc.text("CDB Liquidez Diária - 33% do seu capital para investimento", 10, 80);
    doc.setFontType("italic");
    doc.text("Fundos RF - 33% do seu capital para investimento", 10, 90);

    doc.setFontType("bold");
    doc.text("Médio prazo:", 10, 110);
    doc.setFontType("italic");
    doc.text("CDB, LCI/LCA, LC - 51% do seu capital para investimento", 10, 120);
    doc.setFontType("italic");
    doc.text("Fundo Crédito Privado - 49% do seu capital para investimento", 10, 130);

    doc.setFontType("bold");
    doc.text("Longo prazo:", 10, 150);
    doc.setFontType("italic");
    doc.text("Tesouro IPCA - 51% do seu capital para investimento", 10, 160);
    doc.setFontType("italic");
    doc.text("Fundo Crédito Privado - 49% do seu capital para investimento", 10, 170);
    doc.save('test.pdf');
  }

}
