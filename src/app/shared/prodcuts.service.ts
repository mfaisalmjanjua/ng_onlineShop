import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProdcutsService {
  constructor(private _http: HttpClient) {
    console.log()
  }

  getAll() {
    return this._http.get(`${environment.localSrv}products`);
  }
}
