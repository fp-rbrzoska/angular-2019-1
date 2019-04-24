import { Injectable } from '@angular/core';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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
  ];
  constructor() { }

  getProducts() {
    return this.products;
  }
}
