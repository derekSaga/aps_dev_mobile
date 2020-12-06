import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalComponent2 } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent2;
  let fixture: ComponentFixture<ModalComponent2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent2 ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
