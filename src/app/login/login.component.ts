import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../Services/auth-guard.service';
import { SidenavService } from '../Services/sidenav.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  constructor(private sideNavService: SidenavService,private formBuilder:FormBuilder,
    private router:Router,private userService:UserService,private authService:AuthGuardService) {
    this.sideNavService.setVisible(false);
    
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
     
    });
   }
  checkLoggedIn() {
   
  }

  ngOnInit() {
   const token=localStorage.getItem('jwt');
   if(!this.authService.isTokenExpired(token)){
     this.router.navigate(['']);
   }
  }
  Login(formValue){
    this.userService.Login(formValue).subscribe(response=>{
      localStorage.setItem("jwt",response);
      this.userService.SetUserRole(response);
      this.router.navigate(['']);
    });
  }



}
