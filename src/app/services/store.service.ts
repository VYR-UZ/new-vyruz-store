import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  //array del carrito de compras
  private myShopingCart: Product[] = []

  constructor() { }

  //Agrega el producto al carrito
  addProduct(product: Product){
    this.myShopingCart.push(product);
  }

  //Metodo para acceder a la lista
  getShopingCart(){
    return this.myShopingCart;
  }

  //Calcula el total de los productos agregados
  getTotalCart(){
    return this.myShopingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
