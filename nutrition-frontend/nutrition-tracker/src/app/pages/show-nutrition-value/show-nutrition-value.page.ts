import { Component, OnInit } from '@angular/core';
import {ApicallsService} from '../../services/apicalls.service'

@Component({
  selector: 'app-show-nutrition-value',
  templateUrl: './show-nutrition-value.page.html',
  styleUrls: ['./show-nutrition-value.page.scss'],
})
export class ShowNutritionValuePage implements OnInit {
  todo = {}
  food:any
  foodsearch:any
  foodnamesearched:any
  constructor(private apicall:ApicallsService) { }



  ngOnInit() {
//     this.apicall.get('get_nutrition_value/walnuts').subscribe((res:any)=>{
// console.log(res)
//     })
    }

    
  log() {
    this.apicall.get('get_nutrition_value/'+this.foodsearch).subscribe((res:any)=>{
      console.log(res);
      this.foodnamesearched=this.foodsearch
      this.food=res
    })
  }





}
