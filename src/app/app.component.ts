import { Component } from '@angular/core';
import { Product } from '../Models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectAngular';
  names = [];
  name: string;

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.jpg',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.jpg',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.jpg',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.jpeg',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.jpeg',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.jpeg',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  addName(name: string) {
    this.names.push(name);
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

}
