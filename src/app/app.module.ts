import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http' 

import {
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatSelectModule
} from '@angular/material';

import {CarouselModule} from 'ngx-bootstrap/carousel';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NumberPickerModule} from 'ng-number-picker';

// components

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CartService } from './Services/cart.service';
import { UserService } from './Services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CartComponent,
    CheckoutComponent,
    ProductComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatBadgeModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    CarouselModule,
    NumberPickerModule,
    MatStepperModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CartService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
