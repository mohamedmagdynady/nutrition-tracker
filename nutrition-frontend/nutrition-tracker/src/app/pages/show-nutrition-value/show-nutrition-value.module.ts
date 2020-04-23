import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowNutritionValuePageRoutingModule } from './show-nutrition-value-routing.module';

import { ShowNutritionValuePage } from './show-nutrition-value.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowNutritionValuePageRoutingModule
  ],
  declarations: [ShowNutritionValuePage]
})
export class ShowNutritionValuePageModule {}
