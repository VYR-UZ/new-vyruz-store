import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = "";
  @Output() loaded = new EventEmitter<string>(); //mi propio evento
  imgDefault = './assets/img/placeholder.jpg';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    // before render
    // NO async -- once time
    console.log('constructor', 'imgValue =>' , this.img);
  }

  ngOnChanges(){
    // before render
    // changes inputs -- times
    console.log('ngOnChanges', 'imgValue =>' , this.img);
  }

  ngOnInit(): void {
    // before render
    // async - fetch, api
    // once time
    console.log('ngOnInit', 'imgValue =>' , this.img);

    //Contador cambia cada segundo
    //setIntervall es una funcion windows
    /*this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter');
    }, 1000)*/

  }

  ngAfterViewInit(){
    // after render
    // handler children
    // directivas
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(){
    // delete component
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  //Se muestra una imagen pordefecto en caso de que no exista
  //imgError, es un evento interno del componente
  imgError(){
    this.img =  this.imgDefault;
  }

  //Si la imagen fue cargada
  imgLoad(){
    console.log("ImgComponent");
    this.loaded.emit(this.img);
  }

}
