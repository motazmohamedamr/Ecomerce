import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   userData:any
  constructor(private _HttpClient:HttpClient , private _Router:Router) { }
  

  singOut():void{
    localStorage.removeItem('eToken')
    this._Router.navigate(['/login'])
  }


  saveUserData(){
     if ( localStorage.getItem('eToken')!= null) {
       let encodedToken:any = localStorage.getItem('eToken')
       let decodedToken =  jwtDecode(encodedToken)
       this.userData = decodedToken
       console.log(decodedToken);
       
      }
  }
  setLogin(userData:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin', userData)
  }
  setRegister(userData:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup', userData)
  }
}
