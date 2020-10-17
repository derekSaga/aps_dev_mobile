import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoAcoesPage } from './info-acoes.page';

describe('InfoAcoesPage', () => {
  let component: InfoAcoesPage;
  let fixture: ComponentFixture<InfoAcoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAcoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoAcoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
