import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../product.service';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  @ViewChild('searchInput') searchInput;
  products: Product[];
  constructor(private service: ProductService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    fromEvent(this.searchInput.nativeElement, 'keyup')
    .pipe(
      debounceTime(200),
      map((ev: any) => ev.target.value)
    )
    .subscribe(
     q => this.service.search(q)
    )
  }
}
