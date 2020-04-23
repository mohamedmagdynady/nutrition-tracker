import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcinfoPageRoutingModule } from './calcinfo-routing.module';

import { CalcinfoPage } from './calcinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcinfoPageRoutingModule
  ],
  declarations: [CalcinfoPage]
})
export class CalcinfoPageModule {}
