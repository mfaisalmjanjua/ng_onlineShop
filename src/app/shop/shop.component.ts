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
  allProducts: Item[] = [
    {
      categor: 'wood',
      name: 'Stainless Steel Hip Flask',
      description:
        'A classic stainless steel hip flask for carrying and sipping your favorite spirits.',
      old: '65.00',
      discount: '62.00',
      sale: 'sale',
      feature: 'feature',
      image: '1',
    },
    {
      categor: 'wood',
      name: 'Leather-Bound Flask',
      description:
        'A flask with a leather cover, often used for a more elegant drinking experience.',
      old: '45.00',
      discount: '40.00',
      sale: '-31%',
      feature: 'feature',
      image: '2',
    },
    {
      categor: 'wood',
      name: 'Glass Flask',
      description:
        'A glass flask suitable for carrying and preserving various liquids, including alcoholic beverages.',
      old: '45.00',
      discount: '40.00',
      sale: '-25%',
      feature: 'feature',
      image: '3',
    },
    {
      categor: 'wood',
      name: 'Travel Flask Set',
      description:
        'A set that includes a flask, cups, and a carrying case for on-the-go enjoyment.',
      old: '45.00',
      discount: '40.00',
      sale: '',
      feature: 'feature',
      image: '4',
    },
    {
      categor: 'wood',
      name: 'Flask Gift Set',
      description:
        'A gift set that may include a flask, funnel, and shot glasses, often packaged in an elegant box.',
      old: '45.00',
      discount: '40.00',
      sale: 'sale',
      feature: '',
      image: '5',
    },
    {
      categor: 'wood',
      name: 'Custom Engraved Flask',
      description:
        'A flask that can be personalized with custom engravings or messages.',
      old: '45.00',
      discount: '40.00',
      sale: 'sale',
      feature: 'feature',
      image: '6',
    },
    {
      categor: 'wood',
      name: 'Stainless Steel Hip Flask',
      description:
        'A classic stainless steel hip flask for carrying and sipping your favorite spirits.',
      old: '65.00',
      discount: '62.00',
      sale: 'sale',
      feature: 'feature',
      image: '7',
    },
    {
      categor: 'wood',
      name: 'Leather-Bound Flask',
      description:
        'A flask with a leather cover, often used for a more elegant drinking experience.',
      old: '45.00',
      discount: '40.00',
      sale: '-31%',
      feature: 'feature',
      image: '8',
    },
    {
      categor: 'wood',
      name: 'Glass Flask',
      description:
        'A glass flask suitable for carrying and preserving various liquids, including alcoholic beverages.',
      old: '45.00',
      discount: '40.00',
      sale: '-25%',
      feature: 'feature',
      image: '9',
    },
    {
      categor: 'wood',
      name: 'Travel Flask Set',
      description:
        'A set that includes a flask, cups, and a carrying case for on-the-go enjoyment.',
      old: '45.00',
      discount: '40.00',
      sale: '',
      feature: 'feature',
      image: '10',
    },
    {
      categor: 'wood',
      name: 'Flask Gift Set',
      description:
        'A gift set that may include a flask, funnel, and shot glasses, often packaged in an elegant box.',
      old: '45.00',
      discount: '40.00',
      sale: 'sale',
      feature: '',
      image: '11',
    },
    {
      categor: 'wood',
      name: 'Custom Engraved Flask',
      description:
        'A flask that can be personalized with custom engravings or messages.',
      old: '45.00',
      discount: '40.00',
      sale: 'sale',
      feature: 'feature',
      image: '12',
    },
  ];
  products: Item[] = [];
  loading: boolean = false;

  selectedPage: number = 1;
  productPerPage: number = 2;

  // // pagination vairables
  // totalItems: number; // total number of product fetch from DB
  // limitperPage: number = 1; // show number of items on each page
  // public selectedPage: number = 1; // on page number
  // totalPages: number; // total pages based on totalitem
  // // currentPage$ = new BehaviorSubject<number>(1);

  constructor(private _prodSrv: ProdcutsService) {}

  ngOnInit(): void {
    this.slicedProducts();
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
    this.changePage(1)
  }

  changePage(page: any) {
    this.selectedPage = page;
    this.slicedProducts();
  }

  slicedProducts() {
    this.products = [];
    const pageIndex = (this.selectedPage - 1) * this.productPerPage;
    const endIndex = (this.selectedPage - 1) * this.productPerPage + this.productPerPage;
    this.products = this.allProducts.slice(pageIndex, endIndex)
  }

  // get pageNumbers(): number[] {
  //   return Array(Math.ceil(this.allProducts.length / this.productPerPage))
  //     .fill(0)
  //     .map((x, i) => i + 1);
  // }

  // changePageSize(event: Event) {
  //   const newSize = (event.target as HTMLInputElement).value;
  //   this.productPerPage = Number(newSize);
  //   this.changePage(1);
  // }

  // changePage(pageNumber: number) {
  //   this.selectedPage = pageNumber;
  //   console.log(pageNumber, 'page');
  //   this.slicedProduct();
  // }

  // slicedProduct() {
  //   let pageIndex = (this.selectedPage - 1) * this.productPerPage;
  //   this.products = this.allProducts.slice(pageIndex, this.productPerPage);
  // }
}
