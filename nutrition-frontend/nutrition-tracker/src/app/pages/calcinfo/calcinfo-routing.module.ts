import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcinfoPage } from './calcinfo.page';

const routes: Routes = [
  {
    path: '',
    component: CalcinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcinfoPageRoutingModule {}
