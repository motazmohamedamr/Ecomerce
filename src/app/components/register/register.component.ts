import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  constructor(private _AuthService:AuthService ,  private _Router:Router ) {}
   massageError = ''
   isLoading:boolean = false;
  registerFrom:FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[ Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
    rePassword:new FormControl('',[ Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  }); 
  handleFrom():void{
    if(this.registerFrom.valid){
      this.isLoading = true;
     
  //  console.log(this._AuthService.setRegister(this.registerFrom.value));
  this._AuthService.setRegister(this.registerFrom.value).subscribe({
    next:(res)=>{
      // console.log(res);
      if(res.message == 'success'){
          this._Router.navigate(['/login'])
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
    this.registerFrom.markAllAsTouched()
  }
}
}
