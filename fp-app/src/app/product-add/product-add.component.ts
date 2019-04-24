import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  productsForm: FormGroup;
  constructor() {
    this.productsForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        price: new FormControl(0),
        description: new FormControl('', [Validators.required, Validators.maxLength(20)])
      }
    )
  }

  ngOnInit() {
    this.productsForm.valueChanges.subscribe(console.log);
  }

  save(val) {
    console.log(val)
    this.productsForm.reset();
  }

}
