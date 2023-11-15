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
  totalItems: number = 1;

  selectedPage: number = 1;
  productPerPage: number = 10;

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
  // changePageSize(noOfItem: Event) {
  //   const v = (noOfItem.target as HTMLInputElement).value;
  //   this.productPerPage = Number(v);
  //   this.changePage(1);
  // }
  changePageSize(el:number){
    this.productPerPage = el;
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
}
