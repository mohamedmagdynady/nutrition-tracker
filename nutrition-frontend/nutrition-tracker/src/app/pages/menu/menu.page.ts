import { Component, OnInit } from '@angular/core';
import {ApicallsService} from '../../services/apicalls.service'
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private apicall:ApicallsService,private storage: Storage,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.storage.get('tocken').then((val) => {
     if(val==undefined)
     this.router.navigate(['/login'])
  }
    )}
  logout(){
    
      this.storage.set('tocken', undefined)
      
      this.router.navigate(['/login'])
      
      
    }
    
  

}

