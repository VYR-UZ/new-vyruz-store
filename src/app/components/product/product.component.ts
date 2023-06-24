import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //Le damos un estado inisial al arreglo
  @Input('product') product: Product = {
    id: '',
    title: '',
    image: '',
    price: 0,
    description: '',
    category: '',
  }

  //Envia informacion de tipo producto
  //Se envia del hijo al padre
  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(){
    //Indicamos que el producto se emite
    this.addedProduct.emit(this.product)
  }

}
