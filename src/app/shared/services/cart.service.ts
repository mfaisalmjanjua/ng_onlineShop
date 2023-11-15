import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '@app/models/CartItem';
import { Product } from '@app/models/Products';
import { Observable } from 'rxjs';
import { cartUrl } from 'src/config/config';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _http: HttpClient) {}

  getCartItems(): Observable<CartItem[]> {
    return this._http.get<CartItem[]>(`${cartUrl}`);
  }

  addProductToCart(product: Product): Observable<any> {
    return this._http.post(cartUrl, { product });
  }
}
