import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesquisaAcoesPage } from './pesquisa-acoes.page';

describe('PesquisaAcoesPage', () => {
  let component: PesquisaAcoesPage;
  let fixture: ComponentFixture<PesquisaAcoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaAcoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesquisaAcoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
