import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Item } from '../Models/item';
import { CartService } from '../Services/cart.service';
import { SidenavService } from '../Services/sidenav.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  billingForm;
  deliveryForm;
  detailsForm;
  public items:Item[];
  public total=0;
  constructor(private sideNavService: SidenavService,private formBuilder:FormBuilder,public cartService:CartService) {
    sideNavService.setVisible(false);
    this.items=this.cartService.getItems();
    this.setTotalPrice();
   
    this.billingForm = this.formBuilder.group({
      name: ['', Validators.required],
      billingEmail: ['', [Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      billingPhone:['',Validators.required],
      billingStreet:['',Validators.required],
      billingStreetNumber:['',Validators.required]
     
    });
    this.deliveryForm = this.formBuilder.group({
      deliveryName: ['', Validators.required],
      deliveryEmail: ['', [Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      deliveryStreet:['',Validators.required],
      deliveryStreetNumber:['',Validators.required],
      deliveryCity:['',Validators.required],
      deliveryPostal:['',Validators.required]
     
    });
    this.detailsForm=this.formBuilder.group({
      remark:['',Validators.required]
    });
  }

  ngOnInit() {
  }
  setTotalPrice(){
    this.items.forEach(element => {
      this.total=this.total+element.total;
    });
  }

}
