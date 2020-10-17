import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizPerfilInvestimentoPage } from './quiz-perfil-investimento.page';

describe('QuizPerfilInvestimentoPage', () => {
  let component: QuizPerfilInvestimentoPage;
  let fixture: ComponentFixture<QuizPerfilInvestimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizPerfilInvestimentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizPerfilInvestimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
