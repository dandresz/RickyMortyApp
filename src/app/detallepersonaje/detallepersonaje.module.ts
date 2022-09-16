import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallepersonajePageRoutingModule } from './detallepersonaje-routing.module';

import { DetallepersonajePage } from './detallepersonaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallepersonajePageRoutingModule
  ],
  declarations: [DetallepersonajePage]
})
export class DetallepersonajePageModule {}
