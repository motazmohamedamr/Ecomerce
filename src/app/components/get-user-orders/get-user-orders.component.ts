
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-get-user-orders',
  templateUrl: './get-user-orders.component.html',
  styleUrls: ['./get-user-orders.component.css']
})
export class GetUserOrdersComponent implements OnInit {
 constructor(private _CartService: CartService){}
 ngOnInit(): void {
    // this._CartService.getAllOrders(id:String).subscribe()
 }
 
}
