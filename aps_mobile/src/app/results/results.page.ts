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
  public async gerarPDF(nome) {
    const doc = new jsPDF();
    doc.text('Olá ' +  nome + '!', 85, 10);
    doc.text("Lorem ipsum dolor sit amet consectetur adipisicing elit. odi assumenda ", 10, 30);
    doc.text("consectetur deserunt, amet dolores mollitia, alias impedit fugiat, eos non", 10, 40);
    doc.text("sequi provident hic repudiandae nobis consequuntur illum officiis? Ea, odio.", 10, 50);

    doc.save('test.pdf');
  }

}
