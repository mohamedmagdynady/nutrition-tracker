import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ApicallsService {
  readonly ROOT_URL;
  auth:any
  constructor(private http: HttpClient,private storage: Storage) {
    this.ROOT_URL = 'http://localhost:3000';
    
    this.storage.get('tocken').then((val) => {
      this.auth=val
    });

  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  recordeating(Name:string,qunatity:Number){
    return this.http.patch(`${this.ROOT_URL}/eated-today`, {"Name":Name,"quantity":qunatity},{headers:new HttpHeaders().set('Authorization','Bearer '+ this.auth )})
  }
  
  fetch_day_intake(){
    
      return this.http.get(`${this.ROOT_URL}/todayprogress`,{headers:new HttpHeaders().set('Authorization','Bearer '+ this.auth )})
  }
  
  signup(user:any){
    return this.http.post(`${this.ROOT_URL}/users`,user )
  }  

  login(user:any){
    return this.http.post(`${this.ROOT_URL}/users/login`,user )
  }
  logout(tok:any){
    return this.http.post(`${this.ROOT_URL}/users/logout`,{headers:new HttpHeaders().set('Authorization','Bearer '+ this.auth )} )
  }
updateinfo(updates:any){

return this.http.patch(`${this.ROOT_URL}/users/me`,updates,{headers:new HttpHeaders().set('Authorization','Bearer '+this.auth )} )
}

  // post(uri: string, payload: Object) {
  //   return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  // }

  // patch(uri: string, payload: Object) {
  //   return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  // }

  // delete(uri: string) {
  //   return this.http.delete(`${this.ROOT_URL}/${uri}`);
  // }
}
