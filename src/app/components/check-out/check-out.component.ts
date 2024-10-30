import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  constructor(private _FormBuilder:FormBuilder , private _ActivatedRoute: ActivatedRoute , private _CartService:CartService){}
  checkOut:FormGroup = this._FormBuilder.group({
    details:[''],
    phone:[''],
    city:['']
  })
  cartId:any = ''
  ngOnInit(): void {
     this._ActivatedRoute.paramMap.subscribe({
       next: (params) => {
         console.log(params.get('id'));
         this.cartId = params.get('id');
       },
       error: (error) => {
         console.error(error);
       }
     }) 
  }

  checkOutForm():void{
   console.log(this.checkOut.value);
   this._CartService.checkout(this.cartId , this.checkOut.value).subscribe({
     next: (response) => {
       console.log(response);
       if( response.status == "success" ){
         window.open(response.session.url , '_self')
       }
     },
     error: (error) => {
       console.error(error);
     }
   })

   
    
  }
}
