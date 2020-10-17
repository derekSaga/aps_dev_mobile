import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

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
    { letter: 'Iniciante', investmentType:'Para aumentar sua renda, existem duas maneiras principais de ganhar dinheiro: ou você trabalha pelo seu dinheiro, ou seu dinheiro trabalha para você. Em vez de desperdiçar seu dinheiro, ou mantê-lo em uma conta bancária recebendo taxas de juros mínimas, você pode ganhar mais dinheiro ou vê-lo crescer, investindo sabiamente. Os investimentos inicialmente podem não trazer grandes retornos, mas se você tiver consistência, há recompensas esperando por você no longo prazo. Investir também é uma ótima apólice de seguro contra interrupções de carreira que podem ter um grande impacto na sua vida, caso você não esteja preparado com uma reserva de emergencia' ,image: 'https://magportalmagprdstg.blob.core.windows.net/public/2020/09/mercado-financeiro-para-iniciantes-1.jpg' },
    { letter: 'Conservador', investmentType:'Esse tipo de investidor prioriza a segurança em suas aplicações. Em sua diversificação de investimentos, o conservador deve manter a maior parte da sua carteira de investimentos em produtos de baixo risco, como por exemplo:Tesouro Direto,CDB,LC,LCI/LCA,Fundos de renda fixa' , image: 'https://www.jornalcontabil.com.br/wp-content/uploads/2019/10/investimento-1.jpg' },
    { letter: 'Moderado', investmentType:''  ,image: 'https://www.google.com/search?q=investimento&rlz=1C1CHBD_pt-PTBR892BR892&tbm=isch&sxsrf=ALeKk03sSdEgl193FJssItQTQISurNqhFQ:1602945625636&source=lnms&sa=X&ved=0ahUKEwj5yvDk7bvsAhVdJrkGHV_ODpEQ_AUIECgC&biw=1536&bih=722&dpr=1.25#imgrc=_ho1oNWQaNB3-M' },
    { letter: 'Agressivo', investmentType:'' ,image: 'https://i1.wp.com/www.osmelhoresinvestimentos.com.br/wp-content/uploads/2018/10/AN%C3%81LISE-GR%C3%81FICA-SAIBA-O-QUE-%C3%89-Os-Melhores-Investimentos-Gr%C3%A1fico-de-A%C3%A7%C3%B5es.jpg?resize=900%2C450&ssl=1' },
    ];

  public questions: Question[] = [
    {
      text: 'Qual a sua idade?',
      checkedAlternative: null,
      alternatives: [
        'Até 25 anos',
        'De 26 e 40 anos',
        'De 41 e 64 anos',
        '65 anos ou mais',
      ]
    },
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
  ]; 
  
  public currentQuestion = 0;
  public showResult = false;
  public mostAnswered: number;

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

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
    for (const a of answers) {
      counter[a]++;
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
