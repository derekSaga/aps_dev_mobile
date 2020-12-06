import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal3',
  templateUrl: './modal3.component.html',
  styleUrls: ['./modal3.component.scss'],
})
export class Modal3Component implements OnInit {
  constructor(
    public modalCtrol3 : ModalController
    ) {}
  ngOnInit() {}
  close(){
    this.modalCtrol3.dismiss();
  }

}
