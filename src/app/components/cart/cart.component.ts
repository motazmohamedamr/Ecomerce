import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _CartService:CartService , private _ToastrService:ToastrService){}
  cartDetails:any = {};
   ngOnInit(): void {
       this._CartService.getUserCart().subscribe({
         next: (response:any) => {
           console.log(response.data)
           this.cartDetails = response.data;
         },
         error: (error) => {
           console.log(error)
         }
       })
   }
   removeCartItem(id:string){
    this._CartService.removeItem(id).subscribe({
      next: (response:any) => {
        console.log(response)
        this.cartDetails = response.data
        console.log(response.data);
        
        
      },
      error: (error) => {
        console.log(error)
      }
    })
   }
   changeCount(id:string,count:number){
     if(count >0){
      this._CartService.updateQuantity(id,count).subscribe({
        next: (response:any) => {
          console.log(response)
          this.cartDetails = response.data
  
        },
        error: (error) => {
          console.log(error)
        }
      })
     }

   }
}
