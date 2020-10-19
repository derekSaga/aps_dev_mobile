import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultadoIniciantePage } from './resultado-iniciante.page';

describe('ResultadoIniciantePage', () => {
  let component: ResultadoIniciantePage;
  let fixture: ComponentFixture<ResultadoIniciantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoIniciantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadoIniciantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
