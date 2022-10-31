import { EventEmitter, Injectable } from '@angular/core';
import { Article } from './article.model';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { Sale } from '../sale.model';
import { ArticleService } from '../services/article.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  stock:Article[] =[];
  selectedArticle:Article;
  orders:Order[] = [];
  sales:Sale[] = [];
  stockChanged = new BehaviorSubject<Article[]>([]);
  stockChanged$ = this.stockChanged.asObservable();
  orderChanged = new BehaviorSubject<Order[]>([]);
  orderChanged$ = this.orderChanged.asObservable();


  constructor(private articleService: ArticleService) { }

  getStock() {
      return Object.assign([],this.stock);
  }
  getOrders() {
    return Object.assign([],this.orders);
}

getSales() {
  return Object.assign([],this.sales);
}

  getSelectedArticle() {
    return {...this.selectedArticle};
  }
  
  setSelectedArticle(article: Article) {
    //localStorage.setItem('selectedArticleName',article.name);
    //localStorage.setItem('selectedArticleImgPath',article.imgPath);
  }

  setStock(articles: Article[]) {
    this.stock = [...articles];
    this.stockChanged.next(this.stock.slice());
  }
  setOrders(orders: Order[]) {
    this.orders = [...orders];
  }

  setSales(sales: Sale[]) {
    this.sales = [...sales];
  }

  addArticle(article:Article) {
    this.stock.push({...article});
    this.stockChanged.next(Object.assign([],this.stock));
  }

  updateArticle(key:string,article:Article) {
    const index = this.stock.findIndex(art => art.key === key );
    this.stock[index] = article;
    this.stockChanged.next(Object.assign([],this.stock));
  }

  updateArticleQty(key:string) {
    //const index = this.stock.findIndex(art => art.key === key );
    this.articleService.get(key).subscribe((resData) => {
      console.log(resData.quantity);
      const newQty = resData.quantity! -1;
      const article = new Article("1",resData.name, newQty, resData.purchasePrice, resData.sellingPrice,resData.imgPath);
      const item = this.stock.findIndex(art => art.name == article.name);
      this.stock[item] = article;
      this.articleService.update(key,JSON.stringify(article)).subscribe(resData =>{
        console.log(resData);
      });
      this.stockChanged.next(Object.assign([],this.stock));
    });
  }



  addOrder(order:Order) {
    this.orders.push({...order});
  }

  addSale(sale:Sale) {
    this.sales.push({...sale});
  }

  deleteOrder(key: string) {
    const item: Order = this.orders.find((order:any) => order.key === key)!;
    if(this.orders.length == 1) {
      this.orders = [];
    }
    else {
      this.orders.splice(this.orders.indexOf(item));
    }
    this.orderChanged.next(Object.assign([],this.orders));
  }
}
