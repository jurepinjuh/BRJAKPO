import { Component, OnInit } from '@angular/core';
import { Article } from '../Models/article';
import { Brand } from '../Models/brand';
import { ArticleService } from '../Services/article.service';
import { CartService } from '../Services/cart.service';
import { CategoryService } from '../Services/category.service';
import { SidenavService } from '../Services/sidenav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public articles:Article[];
  constructor(private sideNavService: SidenavService,private articleService:ArticleService,private cartService:CartService) {

    sideNavService.setVisible(true);
    this.articleService.getHomePageArticles().subscribe(data=>{
      this.articles=data;
    })
   }

  ngOnInit() {
  
  }
  addToCart(product){
    
    this.cartService.addItem(product);
  }

}
