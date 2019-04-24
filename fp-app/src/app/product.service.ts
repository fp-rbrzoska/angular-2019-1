import { Injectable } from '@angular/core';
import { Product } from './models/Product';
import { BehaviorSubject } from 'rxjs';

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
  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  constructor() { }

  get products$() {
    return this.productsSubject.asObservable();
  }

  search(query: string) {
    const filteredProducts = this.products.filter(
      product =>  product.name.includes(query) || product.description.includes(query)
    );

    this.productsSubject.next(filteredProducts);
  }
}
