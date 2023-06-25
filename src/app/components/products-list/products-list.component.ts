import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  date = new Date();

  //array del carrito de compras
  myShopingCart: Product[] = []

  // Total en el carrito de compras
  totalCart = 0;

  //Un array de productos
  products: Product[] = [

    /*{
      id: '1',
      title: 'Targeta de video',
      image: './assets/img/3060.jpg',
      price: 14500,
      description: '',
      category: ''
    },
    {
      id: '2',
      title: 'Gabinete Corsair',
      image: './assets/img/5000d.jpg',
      price: 3800,
      description: '',
      category: ''
    },
    {
      id: '3',
      title: 'Monitor UltraWide',
      image: './assets/img/lg29.jpg',
      price: 4500,
      description: '',
      category: ''
    },
    {
      id: '4',
      title: 'Monitor UltraWide',
      image: './assets/img/lg29.jpg',
      price: 4500,
      description: '',
      category: ''
    }*/
  ]

  constructor(
    //Esto es una injecction de dependencias
    //La accesibiliad del servicio sera privada
    private StoreService: StoreService,

    private ProductsService:ProductsService
  ) {
    //Mientras no sea asincrono se puede agregar aqui.
    //Se agrega la funcion getShopingCart(), esta creada en el servicio
    this.myShopingCart = this.StoreService.getShopingCart();
   }

  ngOnInit(): void {
    //Aqui se agregan las peticiones asincronas
    this.ProductsService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  addToShopingCart(product: Product){
    //Se agrega la funcion addProduct(), esta creada en el servicio
    this.StoreService.addProduct(product);

    //Se agrega la funcion getTotal(), esta creada en el servicio
    this.totalCart = this.StoreService.getTotalCart();

    console.log(product);
  }

}
