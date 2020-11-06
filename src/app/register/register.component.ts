import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../Services/sidenav.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private sideNavService: SidenavService) {
    sideNavService.setVisible(false);
   }

  ngOnInit() {
  }

}
