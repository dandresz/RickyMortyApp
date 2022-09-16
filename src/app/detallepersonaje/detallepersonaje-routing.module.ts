import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallepersonajePage } from './detallepersonaje.page';

const routes: Routes = [
  {
    path: '',
    component: DetallepersonajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallepersonajePageRoutingModule {}
