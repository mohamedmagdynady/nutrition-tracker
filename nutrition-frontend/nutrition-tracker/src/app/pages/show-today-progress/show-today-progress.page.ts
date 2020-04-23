import { Component, OnInit } from '@angular/core';
import {ApicallsService} from '../../services/apicalls.service'
@Component({
  selector: 'app-show-today-progress',
  templateUrl: './show-today-progress.page.html',
  styleUrls: ['./show-today-progress.page.scss'],
})
export class ShowTodayProgressPage implements OnInit {

  records:any
  overall:any
  constructor(private apicall:ApicallsService) { }

  ngOnInit() {
    this.apicall.fetch_day_intake().subscribe((res:any)=>{
      this.records=res.foodlist
      this.overall=res
      console.log(this.overall)
    })
  }

}
