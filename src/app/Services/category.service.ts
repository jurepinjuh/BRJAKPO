import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Models/category';
import { map } from 'rxjs/operators';
import { Gender } from '../Models/gender';
import { Brand } from '../Models/brand';
import { plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  root = `http://localhost:8080/category`;
 
  constructor(private httpService: HttpClient) {
   
  }

  public getCategories(): Observable<Category[]> {
    return this.httpService.get<Category[]>(this.root + `/getAllCategories`
    ).pipe(map(data => data.map(item => new Category().deserialize(item)))
    );
  }

  public getGenders(): Observable<Gender[]> {
    return this.httpService.get<Gender[]>(this.root + `/getAllGenders`
    ).pipe(map(data =>data.map(data=>new Gender().deserialize(data)))
    );
  }
  public getBrands(): Observable<Brand[]> {
    return this.httpService.get<Brand[]>(this.root+'/getAllBrands')
    .pipe(map(data=>data.map(data=>new Brand().deserialize(data))));
  }
}
