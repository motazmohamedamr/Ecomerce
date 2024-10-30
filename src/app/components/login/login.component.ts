import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService ,  private _Router:Router ) {}
  massageError = ''
  isLoading:boolean = false;
  loginForm: FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)])
  
  })
  setLogin():void{
    if(this.loginForm.valid){
      this.isLoading = true;
     
  //  console.log(this._AuthService.setRegister(this.registerFrom.value));
  this._AuthService.setLogin(this.loginForm.value).subscribe({
    next:(res)=>{
      // console.log(res);
      if(res.message == 'success'){
          localStorage.setItem('eToken' ,res.token)
          this._AuthService.saveUserData()
          this._Router.navigate(['/home'])
          this.isLoading = false;
      }
    },
    error:(err:HttpErrorResponse)=>{
      // console.log(err);
      this.massageError = err.error.message;
      this.isLoading = false;
    }
  })
  }else{
    this.loginForm.markAllAsTouched()
  }
}
}
