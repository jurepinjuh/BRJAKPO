import { Component } from '@angular/core';
import { SidenavService } from './Services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BRJAKPO';
    constructor(public sideNavService: SidenavService) {

    }
}
