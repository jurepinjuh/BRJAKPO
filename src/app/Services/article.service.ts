import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../Models/article';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  root = `http://localhost:8080/article`;

  constructor(private httpService:HttpClient) { }

  public getHomePageArticles(): Observable<Article[]> {
    return this.httpService.get<Article[]>(this.root + `/getHomePage`
    ).pipe(map(data => data.map(item => new Article().deserialize(item)))
    );
  }


}
