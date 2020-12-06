import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogPageRoutingModule } from './blog-routing.module';

import { BlogPage } from './blog.page';
import { ModalComponent } from '../modal/modal.component';
import { ModalComponent2 } from '../modal2/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogPageRoutingModule
  ],
  declarations: [BlogPage, ModalComponent, ModalComponent2],
  entryComponents: [ModalComponent,  ModalComponent2]
})
export class BlogPageModule {}
