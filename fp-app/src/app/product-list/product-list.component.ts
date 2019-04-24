import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(private service: ProductService) {
    this.products = service.getProducts();
  }

  ngOnInit() {
  }

}
