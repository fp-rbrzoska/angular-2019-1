import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    { id: '1',
      description: 'description of product 1',
      name: 'Product 1',
      price: 10.99
    },
    { id: '2',
      description: 'description of product 2',
      name: 'Product 2',
      price: 19.99
    },
    { id: '3',
      description: 'description of product 3',
      name: 'Product 3',
      price: 5.99
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
