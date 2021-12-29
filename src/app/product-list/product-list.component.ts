import { Component, OnInit } from '@angular/core';
import { Product } from 'app/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];

  constructor() { }

  ngOnInit() {
  }

}
