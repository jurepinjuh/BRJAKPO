import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import  jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router,private userService:UserService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const token = localStorage.getItem('jwt');
    let accesRole=route.data["role"] as string;

    if (!this.isTokenExpired(token)) {
      if(this.userService.userRole==accesRole){
        return true;
      }
   
    }
    this.router.navigate(['/login']);
    return false;
  }

  isTokenExpired(token): boolean {

    const date = this.getTokenExpirationDate(token);
    if (date == undefined) { return true; }
    return !(date.valueOf() > new Date().valueOf());
  }

  getTokenExpirationDate(token: string): Date {
    if(token==undefined){
      return null;
    }
    const decoded:any = jwt_decode(token);

    if (decoded.exp == undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }
}
