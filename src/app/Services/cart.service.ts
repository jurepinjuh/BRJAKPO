import { Injectable } from '@angular/core';
import { Article } from '../Models/article';
import { Item } from '../Models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Item[] = [];
  constructor() { }

  public addItem(product: Article) {
   
    let index=this.containsObject(product,this.items);
    if(index==-1){
      let item = new Item();
      item.article = product;
      item.quantity = 1;
      item.articleId=product.id;
      item.total = item.quantity * product.price;
      this.items.push(item);
    }
    else{
      console.log(this.items[index])
      this.items[index].quantity=this.items[index].quantity+1;
      this.items[index].total=this.items[index].quantity*product.price;
    }
   
  }

  public deleteItem(item:Item){
    let index=this.items.indexOf(item);
    this.items.splice(index,1);
  }
  public getItems() {
    return this.items;
  }

  public getSize() {
    return this.items.length;
  }

  private containsObject(obj:Article, list:Item[]) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].articleId === obj.id) {
            return i;
        }
    }
    return -1;
}

}
