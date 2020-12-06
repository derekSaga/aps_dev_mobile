import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import jsPDF from 'jspdf';
import {PersistenciaService, Name} from '../services/persistencia.service';

@Component({
  selector: 'app-resultado-iniciante',
  templateUrl: './resultado-iniciante.page.html',
  styleUrls: ['./resultado-iniciante.page.scss'],
})
export class ResultadoIniciantePage implements OnInit {

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
      lines = doc.splitTextToSize('Para pessoas com perfil Iniciante, que não sabem como investir e nem os objetivos finais desse investimento, planejamos um material para ensiná-lo conceitos básicos, super necessários para entrar no mundo dos investimentos. Seguindo este passo a passo, você conseguirá planejar seus investimentos.', maxLength);
      doc.text(lines,10, 30);

      lines = doc.splitTextToSize('1. Primeiro passo: Definir onde quer chegar', maxLength);
      doc.text(lines,10, 70);

      lines = doc.splitTextToSize('Antes de mais nada é preciso definir seus objetivos e traçar sua estratégia. Para que você quer investir? Qual a finalidade? Viajar? Comprar algo específico? Se aposentar mais cedo? Foque nas suas metas pessoais e tente definir um valor médio para conseguir realizar cada uma delas. Isso vai ajudar na hora de escolher os investimentos e montar uma carteira diversificada. O mais importante é não esperar por milagres ou grandes lucros. Juntar dinheiro é um processo que pode ser um pouco demorado às vezes. Mas não se desespere! Com um bom planejamento, você consegue.', maxLength);      
      doc.text(lines,10, 80);

      lines = doc.splitTextToSize('2. Investimentos para iniciantes', maxLength);      
      doc.text(lines,10, 135); 

      lines = doc.splitTextToSize('Com tantas opções de investimento, fica difícil decidir em qual aplicar, não é? Os iniciantes devem começar pela Renda Fixa. Na maioria das vezes, os títulos de Renda Fixa são emitidos por bancos, empresas ou pelo   governo para o financiamento de atividades. A sua rentabilidade, que pode ser prefixada ou pós-fixada, é fruto dos juros que as instituições pagam pela aplicação do seu dinheiro nesse tipo de produto.', maxLength);      
      doc.text(lines,10, 145);

      lines = doc.splitTextToSize('O título prefixado é aquele com o rendimento e o valor de resgate conhecidos no momento que você faz o investimento. Por exemplo, você compra um CDB pré, com taxa de 10% ao ano e prazo de um ano. Caso você tenha investido R$ 100 mil, sabe que vai retirar R$ 110 mil depois de um ano.', maxLength);      
      doc.text(lines,10, 185);

      lines = doc.splitTextToSize('Já o título pós-fixado é aquele em que a taxa de remuneração é conhecida no momento da aplicação, mas você só fica sabendo o valor de resgate na data de vencimento. Por exemplo, você comprou uma LCI de 180 dias, que remunera a 90% do CDI. Como não sabemos o valor do CDI nesse período, não dá para saber ao certo o valor do resgate. Mas isso pode ser estimado, de acordo com projeções do CDI. Lembrando que, se os juros subirem no período, o rendimento final será maior que o esperado. Ou vice-versa.', maxLength);      
      doc.text(lines,10, 220); 

      lines = doc.splitTextToSize('Além dos títulos, diversos fundos de investimento são classificados como Renda Fixa e, muitas vezes, procuram superar a rentabilidade oferecida por esses títulos. Por isso, vale a pena checar a lista de fundos. Os COEs também podem ser uma opção, pois você investe com o seu capital 100% protegido, e pode ter um retorno superior quando comparado aos outros investimentos.', maxLength);      
      doc.text(lines,10, 265);
      
      doc.addPage();

      lines = doc.splitTextToSize('Ou seja, de maneira geral, os investimentos em Renda Fixa podem oferecer mais tranquilidade e uma segurança bem maior, por serem de baixo risco.', maxLength);      
      doc.text(lines,10, 10);

      centeredText("Confira a lista de opções abaixo:", 30);

      doc.setFontType("italic");
      
      doc.text("Ações",10, 50);
      doc.text("Trader",10, 70);
      doc.text("BDR",10, 90);
      doc.text("Fundos Imobiliários",10, 110);

      doc.setFontType("normal");
      lines = doc.splitTextToSize('3. Defina o seu perfil de investidor', maxLength);      
      doc.text(lines,10, 130);

      lines = doc.splitTextToSize('É muito importante ressaltar que, antes de começar a investir, é indispensável definir o seu perfil de investidor. Para isso, deve-se analisar todos os objetivos e a tolerância a riscos do investidor. Às vezes, até a quantia disponível para investir pode ajudar na definição.', maxLength);      
      doc.text(lines,10, 140);

      lines = doc.splitTextToSize('Investidores que não são abertos a nenhum tipo de risco são definidos como conservadores. Os que aceitam enfrentar alguns riscos visando uma maior rentabilidade são definidos como moderados ou arrojados, dependendo do nível de tolerância ao risco.', maxLength);      
      doc.text(lines,10, 165);

      lines = doc.splitTextToSize('Ou seja, essa é uma etapa muito importante no processo, pois é o que vai direcionar a escolha do investimento ideal para a estratégia traçada pelo investidor.', maxLength);      
      doc.text(lines,10, 190);

      lines = doc.splitTextToSize('4. Monte a sua reserva para emergências', maxLength);      
      doc.text(lines,10, 215);

      lines = doc.splitTextToSize('Para criar um fundo para emergências é essencial. Em diversos momentos de nossas vidas, nos deparamos com imprevistos. Desemprego, necessidades familiares, acidentes… Isso tudo pode nos descapitalizar, caso não tenhamos um plano B. Por isso, é sempre necessário prever um dinheiro para esses possíveis acontecimentos.', maxLength);      
      doc.text(lines,10, 225);

      lines = doc.splitTextToSize('Investimentos com liquidez diária, facilidade no resgate e prazos curtos são as melhores dicas para compor uma reserva emergencial. Fundos de Investimento em Renda Fixa e Fundos de Investimento DI são excelentes opções para essa finalidade. Existem diversas opções a partir de R$ 100, e você também pode ir aplicando nos aportes mensais de acordo como sua disponibilidade e planejamento: R$ 100, R$ 500…', maxLength);      
      doc.text(lines,10, 255);

      doc.addPage();

      lines = doc.splitTextToSize('O valor que você terá que disponibilizar para essa reserva vai de acordo com:', maxLength);      
      doc.text(lines,10, 15);

      lines = doc.splitTextToSize('Renda: Empresários, profissionais autônomos e empregados com baixo grau de certeza sobre o valor do salário no fim do mês devem ter um cuidado e uma reserva maior. Já funcionários públicos, que têm mais certeza sobre a sua renda, podem formar um fundo emergencial menor.', maxLength);      
      doc.text(lines,10, 30);

      lines = doc.splitTextToSize('Responsabilidades: Se você mora de aluguel e tem dependentes financeiros, você deve se esquematizar para ter uma maior reserva.', maxLength);      
      doc.text(lines,10, 55);

      lines = doc.splitTextToSize('Emprego: Sua reserva também varia de acordo com a sua facilidade para arranjar um novo emprego, caso você seja surpreendido por uma demissão.', maxLength);      
      doc.text(lines,10, 70);
    }

    if(prazo == "Longo"){
      lines = doc.splitTextToSize('Para pessoas com perfil Iniciante, que já sabem o objetivo final dos seus investimentos e avaliaram que precisam de resultados em 10 anos ou mais, temos algumas sujestões para investir da melhor forma, vendo o que realmente faz sentido para você.Os melhores investimentos de longo prazo podem oferecer retornos muito interessantes.', maxLength);
      doc.text(lines,10, 30);

      lines = doc.splitTextToSize('O que você precisa saber para investir a Longo Prazo', maxLength);
      doc.text(lines,10, 70);

      lines = doc.splitTextToSize('É difícil prever o que vai ocorrer, mas grande parte dos investidores desejam altas rentabilidades, sobretudo, quando aplicam a longo prazo. Afinal, investimentos a longo prazo podem trazer retornos superiores às opções mais imediatas. A questão é entender quais ativos ter na carteira – e por quanto tempo você pode manter esses produtos no seu portfólio.', maxLength);
      doc.text(lines,10, 85);

      lines = doc.splitTextToSize('Em geral, investimentos de longo prazo podem pagar taxas mais atrativas, como é o caso de produtos de renda fixa. Através deles, o investidor se compromete a deixar os recursos alocados em determinada aplicação por mais tempo e, em troca, recebe maiores retornos. Pensa bem:', maxLength);
      doc.text(lines,10, 120);

      lines = doc.splitTextToSize('Se você empresta dinheiro a um amigo por um ano, você vai cobrar uma determinada taxa de juros. Mas, se você empresta o mesmo dinheiro para o mesmo amigo por 10 anos, os juros que você vai cobrar serão muito maiores, pois a incerteza e, portanto, o risco será maior.', maxLength);
      doc.text(lines,10, 150);

      centeredText("Confira a lista de opções abaixo:", 180);

      doc.setFontType("italic");
      
      doc.text("Tesouro Direto",10, 200); 
    }

    if(prazo == "Medio"){
      lines = doc.splitTextToSize('Para pessoas com perfil Iniciante, que já sabem o objetivo final dos seus investimentos e avaliaram que precisam de resultados em 10 anos ou mais, temos algumas sujestões para investir da melhor forma, vendo o que realmente faz sentido para você.Os melhores investimentos de longo prazo podem oferecer retornos muito interessantes.', maxLength);
      doc.text(lines,10, 30);

      lines = doc.splitTextToSize('O que você precisa saber para investir a Médio Prazo', maxLength);
      doc.text(lines,10, 65);

      lines = doc.splitTextToSize('Investimentos de médio prazo são aqueles cujo retorno será obtido, em média, entre dois e cinco anos – assim como o seu resgate. Em geral, os aportes são feitos pelo investidor que visa determinados objetivos no médio prazo, como viagens, a compra de um carro ou outro bem de alto valor, entre outros.', maxLength);
      doc.text(lines,10, 80);

      lines = doc.splitTextToSize('Para que estes objetivos possam ser alcançados por meio dos investimentos de médio prazo, e fundamental que o investidor realize os aportes de maneira correta, analisando a rentabilidade e a liquidez do investimento. Desta forma, ele evitará comprometer sua organização financeira e conseguirá atingir seus objetivos de maneira mais fácil e planejada.', maxLength);
      doc.text(lines,10, 115);

      lines = doc.splitTextToSize('Investir em determinados produtos de renda fixa, fundos multimercados, entre outros, por exemplo, podem ser boas opções de composição da sua carteira de investimentos de médio prazo.', maxLength);
      doc.text(lines,10, 155);

      centeredText("Confira a lista de opções abaixo:", 185);

      doc.setFontType("italic");
      
      doc.text("CDB (Certificado de Depósito Bancário)",10, 205);
      doc.text("LCI e LCA para o médio prazo",10, 225);
    }

    if(prazo == "Curto"){
      lines = doc.splitTextToSize('Para pessoas com perfil Iniciante, que já sabem o objetivo final dos seus investimentos e avaliaram que precisam de resultados em até 2 anos, temos algumas sujestões para investir da melhor forma, vendo o que realmente faz sentido para você.', maxLength);
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
      
      doc.text("CDB (Certificado de Depósito Bancário)",10, 230);
      doc.text("Tesouro Selic",10, 250);
      doc.text("Fundos de Curto Prazo",10, 270);
    }
    doc.save('investimentos.pdf');
  }

}
