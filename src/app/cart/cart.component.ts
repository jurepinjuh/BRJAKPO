import { Component, OnInit } from '@angular/core';
import { Item } from '../Models/item';
import { CartService } from '../Services/cart.service';
import { SidenavService } from '../Services/sidenav.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartValue = 1;
  items:Item[];
  constructor(private sideNavService: SidenavService,private cartService:CartService) {
    this.sideNavService.setVisible(true);
    this.items=cartService.getItems();
   }

  ngOnInit() {
  }

  delete(item){
    
    this.cartService.deleteItem(item);
  }

}
