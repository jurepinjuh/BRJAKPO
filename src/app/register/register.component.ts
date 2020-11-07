import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SidenavService } from '../Services/sidenav.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;
  error;
  constructor(private sideNavService: SidenavService,
    private formBuilder:FormBuilder,private userService:UserService,private router:Router) {
    sideNavService.setVisible(false);
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', Validators.required],
     
    });
   }

  ngOnInit() {
  }

  Register(formValue){
    this.userService.RegisterUser(formValue).subscribe(response=>{
      this.router.navigate(['/']);
    })
  }

}
