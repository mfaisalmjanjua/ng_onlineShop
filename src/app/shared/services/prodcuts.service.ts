import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@app/models/Products';
import { Observable } from 'rxjs';

import { baseUrl, productsUrl } from 'src/config/config';

@Injectable({
  providedIn: 'root',
})
export class ProdcutsService {
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${productsUrl}`);
  }
}
