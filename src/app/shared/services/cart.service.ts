import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
  headers:any = {token: localStorage.getItem('eToken')}
  addToCart(productId:string):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
    {productId:productId},
    {headers: this.headers}
    )
  }
  getUserCart():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart' ,
      {headers: this.headers}
    )
  }
  removeItem(product_Id:any):Observable<any>{
     return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${product_Id}`,
      {headers: this.headers}
     )
  }
  updateQuantity(idProduct:string, quantity:number):Observable<any> {
     return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${idProduct}`,
      {count:quantity},
      {headers: this.headers}
     )
  }
  checkout(cartId:string , userData:object):Observable<any> {
     return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`, 
      { shippingAddress: userData},
      {headers: this.headers}
     )
  }
  getAllOrders(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
  }
}
