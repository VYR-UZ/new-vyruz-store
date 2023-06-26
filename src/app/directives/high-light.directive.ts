import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.backgroundColor = '#cccccc'
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = ''
  }

  constructor(
    //Se hace una inyeccion de dependencia
    private element: ElementRef
  ) {
    //esto ya es elemento nativo de JS
    //this.element.nativeElement.style.backgroundColor = '#cccccc'
  }

}
