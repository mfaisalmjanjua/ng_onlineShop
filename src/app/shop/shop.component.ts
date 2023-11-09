import { Component, OnInit } from '@angular/core';
import { ProdcutsService } from '../shared/prodcuts.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: any = [];
  totalItems: number;
  currentPage: number = 1;
  limit: number = 4;

  page: number[] = [];

  constructor(private _prodSrv: ProdcutsService) {}

  ngOnInit(): void {
    this.getAllProdcts();
  }

  getAllProdcts() {
    this._prodSrv.getAll().subscribe((res) => {
      this.products = res;
      this.totalItems = this.products.length;
      const pageCount = Math.ceil(this.totalItems / this.limit);

      this.page = this.range(1, pageCount);

      console.log(this.page);
    });
  }

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }
}
