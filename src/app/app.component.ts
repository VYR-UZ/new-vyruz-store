import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgParent = '';

  showImg = true;

  onLoaded(img:string){
    console.log('AppComponent:', img);
  }

  /*toggleimg(){
    this.showImg = !this. showImg;
  }*/

}
