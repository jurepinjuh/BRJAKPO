import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }
   isVisible = true;
   cartVisible = true;

  public  setVisible(visible: boolean) {
    this.isVisible = visible;
  }

  public  setCartVisible(visible: boolean) {
    this.cartVisible = visible;
  }
}
