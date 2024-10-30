import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { eComDataService } from 'src/app/shared/services/ecom-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute , private _eComDataService:eComDataService , private _CartService:CartService , private _ToastrService:ToastrService){}
  productDetails:Product = {}  as Product


  addCart(id:string):void{
   this._CartService.addToCart(id).subscribe({
     next: (response) => {
       console.log(response);
       this._ToastrService.success('Product Added to Cart Successfully');
     },
     error: (error) => {
       console.error(error);
     }
   })
  }

 productSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    navText: ['', ''],
    items:1,
    nav: true
  }
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next: (params) => {
          console.log(params.get('id'));
          let idProduct:any = params.get('id')
          this._eComDataService.getProductById(idProduct).subscribe({
            next: (response) => {
              console.log(response.data);
              this.productDetails = response.data;
            },
            error: (error) => {
              console.error(error);
            }
          })
        },
        error: (error) => {
          console.error(error);
        }
      })
  }
}
