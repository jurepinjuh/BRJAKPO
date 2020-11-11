import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from './Models/brand';
import { Category } from './Models/category';
import { Gender } from './Models/gender';
import { AuthGuardService } from './Services/auth-guard.service';
import { CartService } from './Services/cart.service';
import { CategoryService } from './Services/category.service';
import { SidenavService } from './Services/sidenav.service';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BRJAKPO';
  public brands: Brand[];
  public categories: Category[];
  public genders: Gender[];
  constructor(public sideNavService: SidenavService,
    private categoryService: CategoryService,
    public cartService: CartService,
    public userService: UserService,
    private authGuardService:AuthGuardService,
    private router:Router) {

    this.categoryService.getBrands().subscribe(data => {
      this.brands = data;
      this.brands.forEach(element => {

      });
      let jwt = localStorage.getItem("jwt");
      this.userService.SetUserRole(jwt);
    });

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;

    });

    this.categoryService.getGenders().subscribe(data => {
      this.genders = data;
    });

  }

  Login() {
    console.log('ALO')
    const token=localStorage.getItem("jwt");
    if(this.authGuardService.isTokenExpired(token)){
      this.router.navigate(['/login']);
    }
  }
}
