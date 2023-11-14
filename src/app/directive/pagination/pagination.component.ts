import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage!: number;
  @Input() productPerPage!: number;
  @Input() total!: any;
  @Output() changePage = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.currentPage, "P- current Page")
    console.log(this.productPerPage, "P- Item Per Page")
    console.log(this.total, "P- total")
  }

}
