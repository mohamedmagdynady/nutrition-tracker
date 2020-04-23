import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterProgressPage } from './enter-progress.page';

const routes: Routes = [
  {
    path: '',
    component: EnterProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterProgressPageRoutingModule {}
