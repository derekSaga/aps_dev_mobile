import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss'],
})
export class Modal2Component implements OnInit {
  constructor(
    public modalCtrol3 : ModalController
    ) {}
  ngOnInit() {}
  close(){
    this.modalCtrol3.dismiss();
  }

}
