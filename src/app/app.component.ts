import { Component } from '@angular/core';

@Component({
  selector: 'fg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string;
  menuOpened: boolean;

  constructor(){
    this.menuOpened = false;
  }

  changeMenuState(){
    this.menuOpened = !this.menuOpened;
  }

}
