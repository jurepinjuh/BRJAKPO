import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../Services/sidenav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sideNavService: SidenavService) {
    sideNavService.setVisible(true);
   }

  ngOnInit() {
  }

}
