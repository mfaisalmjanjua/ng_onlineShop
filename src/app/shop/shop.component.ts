import { Component, DoCheck, OnInit } from '@angular/core';
import { ProdcutsService } from '../shared/prodcuts.service';
import { Item } from '@app/models/item';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  allProducts: Item[] = [];
  products: Item[] = [];
  loading: boolean = false;
  totalItems: number;

  selectedPage: number = 1;
  productPerPage: number = 5;

  constructor(private _prodSrv: ProdcutsService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this._prodSrv.getAll().subscribe((res: any) => {
      this.allProducts = res;
      this.totalItems = res.length;
      this.slicedProducts();
    });
  }

  // paggination
  get pageNumbers(): number[] {
    return Array(Math.ceil(this.allProducts.length / this.productPerPage))
      .fill(0)
      .map((x, i) => i + 1);
  }

  changePageSize(noOfItem: Event) {
    const v = (noOfItem.target as HTMLInputElement).value;
    this.productPerPage = Number(v);
    this.changePage(1);
  }

  changePage(page: any) {
    this.selectedPage = page;
    this.slicedProducts();
  }

  slicedProducts() {
    this.products = [];
    const pageIndex = (this.selectedPage - 1) * this.productPerPage;
    const endIndex =
      (this.selectedPage - 1) * this.productPerPage + this.productPerPage;
    this.products = this.allProducts.slice(pageIndex, endIndex);
  }

  changePage2(event: any) {
    this.selectedPage = event;
    console.log('adf');
  }
}
