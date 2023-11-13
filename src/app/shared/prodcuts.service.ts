import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '@app/models/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProdcutsService {
  constructor(private _http: HttpClient) {
    console.log()
  }

  getAll() {
    return this._http.get<Item[]>(`${environment.localSrv}products`);
  }
}
