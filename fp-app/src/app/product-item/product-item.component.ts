import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  showDescription = false;
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
