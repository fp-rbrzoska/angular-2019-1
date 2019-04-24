import { Injectable } from '@angular/core';
import { Product } from './models/Product';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];
  private productsSubject = new BehaviorSubject<Product[]>([]);
  constructor(private http: HttpClient) {
    this.http.get<Product[]>('http://localhost:3000/products').subscribe(
    p => {
      this.products = p;
      this.productsSubject.next(p);
    })
   }

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
