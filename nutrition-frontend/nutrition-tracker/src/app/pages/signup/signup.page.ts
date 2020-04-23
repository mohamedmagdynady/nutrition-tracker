import { Component, OnInit } from '@angular/core';
import { Router ,NavigationExtras} from '@angular/router';
import { ToastController } from '@ionic/angular';
import {ApicallsService} from '../../services/apicalls.service'
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router: Router,public toastController: ToastController,private storage: Storage,private apicall:ApicallsService) { }

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

  ngOnInit() {
  }
  register(form) {
   // console.log(form.value)
   var allow=true;
   for (var key of Object.keys(form.value)) {
    if(form.value[key]==""){
      
        allow=false;
        this.warning("please enter all info")
      
      
    } 
}
if(allow==true){
  this.apicall.login(form.value).subscribe((res:any)=>{
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
    
    
    
  }

}
}
