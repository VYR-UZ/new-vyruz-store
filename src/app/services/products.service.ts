import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    //Inyeccion de dependencia
    private Http: HttpClient
  ) { }

  //metodo que devuelve los productos
  getAllProducts(){
    return this.Http.get<Product[]>('https://fakestoreapi.com/products');
  }

}
