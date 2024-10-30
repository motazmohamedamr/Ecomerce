import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class eComDataService {

  constructor(private _HttpClient: HttpClient) { }
  getAllProducts():Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }
  getProductById(id:string):Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  getAllCategories():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
}
