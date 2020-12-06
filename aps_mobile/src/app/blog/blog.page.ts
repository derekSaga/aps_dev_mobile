import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  constructor(
    private modalCtrol: ModalController
  ) { }

  async showModal(){
    const modal = await this.modalCtrol.create({
      component: ModalComponent
    });
    modal.present();
  }

  ngOnInit() {
  }

}

