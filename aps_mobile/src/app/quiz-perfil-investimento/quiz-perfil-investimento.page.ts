import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import {PersistenciaService, Name} from '../services/persistencia.service';

type Question = {
  text: string;
  alternatives: string[];
  checkedAlternative: number | null;
};

@Component({
  selector: 'app-quiz-perfil-investimento',
  templateUrl: './quiz-perfil-investimento.page.html',
  styleUrls: ['./quiz-perfil-investimento.page.scss'],
})

export class QuizPerfilInvestimentoPage {

  public possibleResults = [
    {type: 'Iniciante', investmentType:'Para aumentar sua renda, existem duas maneiras principais de ganhar dinheiro: ou você trabalha pelo seu dinheiro, ou seu dinheiro trabalha para você. Em vez de desperdiçar seu dinheiro, ou mantê-lo em uma conta bancária recebendo taxas de juros mínimas, você pode ganhar mais dinheiro ou vê-lo crescer, investindo sabiamente. Os investimentos inicialmente podem não trazer grandes retornos, mas se você tiver consistência, há recompensas esperando por você no longo prazo. Investir também é uma ótima apólice de seguro contra interrupções de carreira que podem ter um grande impacto na sua vida, caso você não esteja preparado com uma reserva de emergência.' ,image: 'https://magportalmagprdstg.blob.core.windows.net/public/2020/09/mercado-financeiro-para-iniciantes-1.jpg' },
    {type: 'Moderado', investmentType:'O investidor com perfil moderado deseja segurança em seus investimentos mas aceita algum tipo de risco para obter retornos acima da média. Busca ganhos a médio-longo prazo e, geralmente, detém algum tipo de conhecimento sobre investimentos. O investidor de perfil moderado almeja uma rentabilidade que supere a inflação, obtendo ganhos reais para o seu patrimônio. A expectativa de rentabilidade para uma carteira moderada é de 115% do CDI, admitindo uma volatilidade (risco) de 2%.'  ,image: 'https://www.jornalcontabil.com.br/wp-content/uploads/2019/10/investimento-1.jpg' },
    {type: 'Conservador', investmentType:'Esse tipo de investidor prioriza a segurança em suas aplicações. Em sua diversificação de investimentos, o conservador deve manter a maior parte da sua carteira de investimentos em produtos de baixo risco.' , image: 'https://comoinvestir.thecap.com.br/wp-content/uploads/2020/08/investimento-mais-indicado-investidor-perfil-conservador.jpg' },
    {type: 'Agressivo', investmentType:'O investidor agressivo está associado a clientes que possuem total conhecimento e domínio do mercado financeiro e de investimentos. Este investidor busca retornos expressivos, suportando quaisquer riscos. O investidor de perfil agressivo almeja elevada rentabilidade para o seu patrimônio e, por isso, lida com naturalidade prejuízos e longos períodos no negativo, se necessário. A expectativa de rentabilidade de longo prazo para essa carteira é de 140% do CDI, admitindo uma volatilidade (risco) de 8%.' ,image: 'https://i1.wp.com/www.osmelhoresinvestimentos.com.br/wp-content/uploads/2018/10/AN%C3%81LISE-GR%C3%81FICA-SAIBA-O-QUE-%C3%89-Os-Melhores-Investimentos-Gr%C3%A1fico-de-A%C3%A7%C3%B5es.jpg?resize=900%2C450&ssl=1' },
  ];

  public timeInvest = [
    {prazo: 'Curto', text1:'espera retorno em um Curto Prazo', text2:'No caso de estratégias de Curto Prazo, o recomendado é que o risco seja baixo para que sejam evitadas possíveis perdas – e se garanta uma rentabilidade mínima e segura. Ou seja, o ideal é escolher um investimento mais conservador, com praticamente nenhum risco de perdas financeiras.'},
    {prazo: 'Medio', text1:'espera retorno em um Médio Prazo', text2:'Investimentos de médio prazo são aqueles cujo retorno será obtido, em média, entre dois e cinco anos – assim como o seu resgate. Em geral, os aportes são feitos pelo investidor que visa determinados objetivos no médio prazo, como viagens, a compra de um carro ou outro bem de alto valor, entre outros.'},
    {prazo: 'Longo', text1:'espera retorno em um Longo Prazo', text2:'Para estratégias de Longo Prazo, prestar atenção nos vencimentos e na liquidez deixa de ser tão importante. O foco é garantir o maior rendimento possível para o longo prazo, então, as recomendações mais comuns são: Diversificar – ou seja, ter aplicações em diferentes ativos e tipos de investimentos, que vão garantir rentabilidades diferentes; e Garantir consistência nas aplicações (investir com certa periodicidade e, sempre que possível, investir mais).'},
    {prazo: 'nsei', text1:'ainda não sabe em quanto tempo espera ter retorno sob suas aplicações', text2: 'Para escolher o prazo de um investimento, você deve considerar qual o seu objetivo final. De forma geral, tudo deve partir do seu objetivo com aquele investimento: o que você pretende, no final das contas, fazer com aqueles valores que estão investindos? Isso varia desde objetivos mais próximos, como comprar um eletrodoméstico ou fazer uma viagem, até os mais distantes, como se aposentar. Sendo assim, vamos te ajudar a entender seu objetivo e te mostrar o que consideramos ideal para você que quer investir.' },
  ];

  public questions: Question[] = [
    {
      text: 'Qual é o seu objetivo ao investir?',
      checkedAlternative: null,
      alternatives: [
        'Começar a investir' ,
        'Criar uma renda extra',
        'Preservar meu patriminio',
        'Aumentar meu patrimonio' 
      ]
    },
    {
      text: 'Como você avalia seu conhecimento sobre investimentos?',
      checkedAlternative: null,
      alternatives: [
        'Não tenho conhecimento',
        'Razoável',
        'Bom',
        'Excelente'
      ]
    },
    {
      text: 'Com que frequência você pretende utilizar uma nova estratégia para os seus investimentos?',
      checkedAlternative: null,
      alternatives: [
        'Ainda não sei', 
        'Esporadicamente',
        'Mensalmente',
        'Frequentemente',
      ]
    },
    {
      text: 'Qual é o valor aproximado dos seus investimentos financeiros atualmente?',
      checkedAlternative: null,
      alternatives: [
        '0 a 5 mil',
        '5 a 10 mil',
        '10 a 20 mil',
        'Mais de 20 mil reais'
      ]
    },
    {
      text: 'Quanto você está disposto a investir inicialmente?',
      checkedAlternative: null,
      alternatives: [
        '0 a 500 reais',
        '500 a 5 mil reais',
        '5 a 10 mil reais',
        'Mais de 10 mil reais'
      ]
    },
    {
      text: 'Em quanto tempo deseja resgatar o dinheiro conquistado nas suas aplicações?',
      checkedAlternative: null,
      alternatives: [
        'Em até 2 anos',
        'De 3 a 5 anos',
        'Em 10 anos ou mais',
        'Ainda não sei'
      ]
    },
  ]; 
  
  public currentQuestion = 0;
  public showResult = false;
  public mostAnswered: number;
  public lastAnswer: number;
  public count = 0;
  public last: boolean = false;

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController,
    private persistenciaService: PersistenciaService
  ) { }
 
  
  public names = this.persistenciaService.all();

  public next() {
    if (this.currentQuestion === this.questions.length - 1) {
      this.calculateMostAnswered();
      this.showResult = true;
    } else {
      this.currentQuestion++;
      this.showToast();
    }
  }

  private calculateMostAnswered() {
    
  const answers = this.questions.map(q => q.checkedAlternative);
  const counter = [0, 0, 0, 0];
  const counter2 = [0, 0, 0, 0];
  for (const a of answers) {
    this.count = this.count + 1;
    if(this.count == 6){
      this.last = true;
      counter2[a]++;
    }else{
      counter[a]++;
    }
  }
  
  if(this.last == true){
    const maxAnswerCount2 = Math.max(...counter2);
    this.lastAnswer = counter2.findIndex(x => x === maxAnswerCount2);
  }
    const maxAnswerCount = Math.max(...counter);
    this.mostAnswered = counter.findIndex(x => x === maxAnswerCount);
}

  private async showToast() {
    const toast = await this.toastController.create({
      header: this.currentQuestion + ' de ' + this.questions.length + ' respondidas',
      duration: 500,
    });
    toast.present();
  }

  public async confirmReset() {
    const alert = await this.alertController.create({
      header: 'Deseja mesmo refatorar seu perfil?',
      message: 'O seu resultado será perdido!',
      buttons: [
        'Me enganei!',
        {
          text: 'Refatorar',
          handler: () => this.reset(),
        }
      ]
    });
    alert.present();
  }

  private reset() {
    this.showResult = false;
    this.currentQuestion = 0;
    for (const q of this.questions) {
      q.checkedAlternative = null;
    }
  }
}
