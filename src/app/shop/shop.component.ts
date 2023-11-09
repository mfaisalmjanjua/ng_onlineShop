import { Component, OnInit } from '@angular/core';
import { ProdcutsService } from '../shared/prodcuts.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: any = [];

  constructor(private _prodSrv: ProdcutsService) {}

  ngOnInit(): void {
    this.getAllProdcts();
  }

  getAllProdcts() {
    this._prodSrv.getAll().subscribe((res) => {
      this.products = res;
    });
  }
}
