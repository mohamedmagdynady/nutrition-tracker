import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterProgressPageRoutingModule } from './enter-progress-routing.module';

import { EnterProgressPage } from './enter-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterProgressPageRoutingModule
  ],
  declarations: [EnterProgressPage]
})
export class EnterProgressPageModule {}
