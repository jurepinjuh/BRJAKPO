import {Routes} from '@angular/router';

import {LoginComponent} from '../app/login/login.component';
import {HomeComponent} from '../app/home/home.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuardService } from './Services/auth-guard.service';
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate:[AuthGuardService],
    data:{role:'USER'}
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path:'addProduct',
    component:AddProductComponent,
    canActivate:[AuthGuardService],
    data:{role:'ADMIN'}
  }
  
]
