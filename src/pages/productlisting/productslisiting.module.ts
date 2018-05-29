import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductlistPage } from './productslisting';

@NgModule({
  declarations: [
    ProductlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductlistPage),
  ],
})
export class ProductlistingPageModule {}
