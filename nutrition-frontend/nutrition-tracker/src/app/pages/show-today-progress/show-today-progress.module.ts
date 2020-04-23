import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowTodayProgressPageRoutingModule } from './show-today-progress-routing.module';

import { ShowTodayProgressPage } from './show-today-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowTodayProgressPageRoutingModule
  ],
  declarations: [ShowTodayProgressPage]
})
export class ShowTodayProgressPageModule {}
