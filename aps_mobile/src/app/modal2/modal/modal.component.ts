import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent2 implements OnInit {

  constructor(
    public modalCtrol2 : ModalController
    ) {}

  ngOnInit() {}

  close(){
    this.modalCtrol2.dismiss();
  }

}