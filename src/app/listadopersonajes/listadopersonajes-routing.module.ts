import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadopersonajesPage } from './listadopersonajes.page';

const routes: Routes = [
  {
    path: '',
    component: ListadopersonajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadopersonajesPageRoutingModule {}
