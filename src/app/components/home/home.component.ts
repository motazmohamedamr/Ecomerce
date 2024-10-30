import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { eComDataService } from 'src/app/shared/services/ecom-data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor( private _eComDataService:eComDataService , private _CartService:CartService , private _ToastrServic:ToastrService){}
  products: Product[] =[]
  categories: any[] = []
  categoriesSliderOption: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
  mainSlider: OwlOptions = {
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
      this._eComDataService.getAllProducts().subscribe({
        next: (response) => {
          this.products = response.data
        },
        error: (error) => {
          console.error(error);
        } 
      })
      this._eComDataService.getAllCategories().subscribe({
        next: (response) => {
          console.log(response);
           this.categories = response.data
        },
        error: (error) => {
          console.error(error);
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
