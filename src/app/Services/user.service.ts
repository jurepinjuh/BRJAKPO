import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  root = `http://localhost:8080/auth`;
  userRole;
  currentUser;
  constructor(private httpService: HttpClient) { }

  Login(formData): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.httpService.post<any>(this.root + `/login`,
      formData, { headers: headers, responseType: 'text' as 'json' });
  }

  RegisterUser(formData): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.httpService.post<any>(this.root + `/register`,
      formData, { headers: headers, responseType: 'text' as 'json' });

  }
  GetCurrentUser(){
    return this.currentUser;
  }
  Logout(){
    this.userRole=null;
    this.currentUser=null;
    localStorage.removeItem("jwt");
  }

    SetUserRole(token){
    if(token!=undefined){
      const decoded:any = jwt_decode(token);
      if(decoded.role!=undefined){
        this.userRole=decoded.role.authority;
        this.currentUser=decoded.sub;
      } 
    }
   
    
  }
}
