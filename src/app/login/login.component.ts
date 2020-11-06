import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../Services/sidenav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private sideNavService: SidenavService) {
    this.sideNavService.setVisible(false);
    console.log(false);
   }

  ngOnInit() {
  }

}
