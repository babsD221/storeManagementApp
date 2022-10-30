import { EventEmitter, Injectable } from '@angular/core';
import { Article } from './article.model';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { Sale } from '../sale.model';

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


  constructor() { }

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
    console.log(this.stock);
    this.stock.push({...article});
    console.log(this.stock.slice());
    this.stockChanged.next(Object.assign([],this.stock));
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
      console.log()
      this.orders.splice(this.orders.indexOf(item));
    }
    this.orderChanged.next(Object.assign([],this.orders));
  }
}
