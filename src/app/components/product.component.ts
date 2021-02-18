import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../Models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent {
  @Input() product: Product;

  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line:typedef
  addCart() {
    console.log('anadir al carrito');
    this.productClicked.emit('this.product.id');
  }
}
