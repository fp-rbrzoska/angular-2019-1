import { Injectable } from '@angular/core';
import { Product } from './models/Product';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];
  private productsSubject = new BehaviorSubject<Product[]>(null);
  constructor(private http: HttpClient) {
    this.http.get<Product[]>('http://localhost:3000/products').subscribe(
    p => {
      this.products = p;
      setTimeout(() => {
        this.productsSubject.next(p);
      }, 2000)
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
