import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { eComDataService } from 'src/app/shared/services/ecom-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private _eComDataService:eComDataService , private _CartService:CartService , private _ToastrServic:ToastrService){}
 @Input() product:any;
 products: Product[] =[]
 
 ngOnInit(): void {
     this._eComDataService.getAllProducts().subscribe({
       next: (response) => {
         this.products = response.data
         console.log(response.data);
         
       },
       error: (error) => {
         console.log(error)
       }
     })
 }

 addCart(id: string ):void{
  this._CartService.addToCart(id).subscribe({
    next: (response) => {
      console.log(response);
      this._ToastrServic.success('Product added successfully to your cart')


    },
    error: (error) => {
      console.error(error);
    }  
  })
}
}
