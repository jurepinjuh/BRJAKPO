import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../Services/sidenav.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private sideNavService: SidenavService) {
    sideNavService.setVisible(false);
    sideNavService.setCartVisible(false);
  }

  ngOnInit() {
  }

}
