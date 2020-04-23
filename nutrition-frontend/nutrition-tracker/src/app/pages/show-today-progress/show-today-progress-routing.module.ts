import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowTodayProgressPage } from './show-today-progress.page';

const routes: Routes = [
  {
    path: '',
    component: ShowTodayProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowTodayProgressPageRoutingModule {}
