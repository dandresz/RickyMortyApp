import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadopersonajesPageRoutingModule } from './listadopersonajes-routing.module';

import { ListadopersonajesPage } from './listadopersonajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadopersonajesPageRoutingModule
  ],
  declarations: [ListadopersonajesPage]
})
export class ListadopersonajesPageModule {}
