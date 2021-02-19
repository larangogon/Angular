import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  OnInit
} from '@angular/core';

import { Product } from '../../Models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnChanges, OnInit{
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('1. constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges', changes);
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    console.log('3. ngOnInit');
  }

  // tslint:disable-next-line:typedef
  addCart() {
    console.log('anadir al carrito');
    this.productClicked.emit('this.product.id');
  }
}
