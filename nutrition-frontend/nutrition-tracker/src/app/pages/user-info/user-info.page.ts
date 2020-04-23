import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ApicallsService} from '../../services/apicalls.service'
import { ToastController } from '@ionic/angular';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {



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

  async elementaddedsuccessfuly() {
    const toast = await this.toastController.create({
      message: "info updated successfully",
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
    
    // form.value.name=this.info.name;
    // form.value.email=this.info.email;
    // form.value.password=this.info.password;
    for (var key of Object.keys(form.value)) {
      if(form.value[key]==""){
        
         
        delete form.value[key]
      

    }
  }

  
    this.apicall.updateinfo(form.value).subscribe((res:any)=>{
      console.log(res)
    this.elementaddedsuccessfuly()
      
      this.router.navigate(['/menu'])
      
      
    },((err:any)=>{
      this.warning(err.error.message),
console.log(err.error)
    })
    )
  

  
     console.log(form.value)
     
   }

}
