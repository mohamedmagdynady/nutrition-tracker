import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ApicallsService} from '../../services/apicalls.service'
import { ToastController } from '@ionic/angular';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-calcinfo',
  templateUrl: './calcinfo.page.html',
  styleUrls: ['./calcinfo.page.scss'],
})
export class CalcinfoPage implements OnInit {

  constructor(private storage: Storage,private route: ActivatedRoute, private router: Router,private apicall:ApicallsService ,public toastController: ToastController) { }
  info:any

  async warning(error:any) {
    const toast = await this.toastController.create({
      header: 'Error !',
      message: error,
      position: 'top',
      color:"danger",
       duration: 2000,
    });
    toast.present();
  }

  async elementaddedsuccessfuly(info:any) {
    const toast = await this.toastController.create({
      header: "${this.Name} added !",
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
    this.route.queryParams.subscribe(params => {
      this.info=params;
      console.log(params);
    });
  }
  register(form) {
    var allow=true
    // form.value.name=this.info.name;
    // form.value.email=this.info.email;
    // form.value.password=this.info.password;
    for (var key of Object.keys(form.value)) {
      if(form.value[key]==""){
        if(key =="name" || key =="email" || key=="password" ){
         allow=false 
        this.warning("please make sure to enter your name , email and password")
         } else{
        delete form.value[key]
      }

    }
  }

  if(allow==true)
    this.apicall.signup(form.value).subscribe((res:any)=>{
      console.log(res.token),this.storage.set('tocken', res.token),
      this.storage.get('tocken').then((val) => {
        console.log('token is ', val);
      });
      this.router.navigate(['/menu'])
      
      
    },((err:any)=>{
      this.warning(err.error.message),
console.log(err.error)
    })
    )
  

  
     console.log(form.value)
     
   }

}
