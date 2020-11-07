import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  root = `http://localhost:8080/auth`;

  constructor(private httpService: HttpClient) { }

  Login(formData): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.httpService.post<any>(this.root + `/login`,
      formData, { headers: headers, responseType: 'text' as 'json'  });
  }
  
  RegisterUser(formData):any  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.httpService.post<any>(this.root + `/register`,
      formData, { headers: headers, responseType: 'text' as 'json' });

  }
}
