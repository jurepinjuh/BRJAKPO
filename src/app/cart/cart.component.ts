import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../Services/sidenav.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartValue = 1;
  constructor(private sideNavService: SidenavService) {
    this.sideNavService.setVisible(true);
   }

  ngOnInit() {
  }

}
