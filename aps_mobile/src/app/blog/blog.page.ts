import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { ModalComponent2 } from '../modal2/modal/modal.component';
import { Modal2Component } from '../modal2/modal2/modal2.component';
import { Modal3Component} from '../modal2/modal3/modal3.component'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})

export class BlogPage implements OnInit {

  constructor(
    private modalCtrol: ModalController,

  ) { }

  async showModal1(){
    const modal = await this.modalCtrol.create({
      component: ModalComponent,

    });
    return await modal.present();
  }

  
  async showModal2(){
    const modal = await this.modalCtrol.create({
      component: ModalComponent2,

    });
    return await modal.present();
  }
  async showModal3(){
    const modal = await this.modalCtrol.create({
      component: Modal2Component,

    });
    return await modal.present();

  }
  async showModal4(){
    const modal = await this.modalCtrol.create({
      component: Modal3Component,

    });
    return await modal.present();
  }
  ngOnInit() {
  }

}

