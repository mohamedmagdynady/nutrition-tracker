import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,private storage: Storage) {
    
   }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   console.log("p"+params["firstname"])
    // });
    
    this.storage.set('age', 'one');

    // Or to get a key/value pair
    this.storage.get('age').then((val) => {
      console.log('Your age is', val);
    });
    
  }

}
