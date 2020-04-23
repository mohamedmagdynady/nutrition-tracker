import { Component, OnInit } from '@angular/core';
import {ApicallsService} from '../../services/apicalls.service'
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-enter-progress',
  templateUrl: './enter-progress.page.html',
  styleUrls: ['./enter-progress.page.scss'],
})
export class EnterProgressPage implements OnInit {
Name:any
quantity:any
search={}
  constructor(private apicall:ApicallsService ,public toastController: ToastController,private storage: Storage) {}

  async warning(error:any) {
    const toast = await this.toastController.create({
      header: 'Error !',
      message: error,
      position: 'top',
      color:"danger",
      buttons: [
        {
        //   side: 'start',
        //   icon: 'star',
        //   text: 'Favorite',
        //   handler: () => {
        //     console.log('Favorite clicked');
        //   }
        // }, {
          text: 'ok',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async elementaddedsuccessfuly(info:any) {
    const toast = await this.toastController.create({
      header: `${this.Name} added !`,
      message: `This contains ${info.Calories.toString().indexOf(".")!==-1?info.Calories.toString().substring(0,info.Calories.toString().indexOf('.')):info.Calories.toString()}calories ,${info.Protein.toString().indexOf(".")!==-1?info.Protein.toString().substring(0,info.Protein.toString().indexOf('.')):info.Protein.toString()} proteins and ${info.Carbs.toString().indexOf(".")!==-1?info.Carbs.toString().substring(0,info.Carbs.toString().indexOf('.')):info.Carbs.toString()} carbohydrates`,
      position: 'top',
      
      buttons: [
        {
        //   side: 'start',
        //   icon: 'star',
        //   text: 'Favorite',
        //   handler: () => {
        //     console.log('Favorite clicked');
        //   }
        // }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }



  ngOnInit() {
  //   this.apicall.recordeating("meat").subscribe((res:any)=>{
  //     console.log(res);
      

  // })
  this.storage.get('tocken').then((val) => {
    console.log(`token = ${val}`)
}
  )
}

submitrecord(){
  if(this.Name && this.quantity){
  this.apicall.recordeating(this.Name,this.quantity).subscribe((res:any)=>{
    console.log(res.foodlist[res.foodlist.length-1]);
    this.elementaddedsuccessfuly(res.foodlist[res.foodlist.length-1])

 },
 (err:any)=>{
   this.warning("Sorry , this element is not in data base")
 }
 )
}else{
  this.warning("you have to enter both fields")
}
console.log("submited")
}


}
