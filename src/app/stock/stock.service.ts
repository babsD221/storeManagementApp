import { EventEmitter, Injectable } from '@angular/core';
import { Article } from './article.model';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { DataStorageService } from '../data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  stock:Article[] =[];
  stockChanged = new BehaviorSubject<Article[]>([]);
  stockChanged$ = this.stockChanged.asObservable();

  constructor() { }

  getStock() {
      return Object.assign([],this.stock);
  }
  setStock(articles: Article[]) {
    this.stock = [...articles];
    this.stockChanged.next(this.stock.slice());
  }
  addArticle(article:Article) {
    console.log(this.stock);
    this.stock.push({...article});
    console.log(this.stock.slice());
    this.stockChanged.next(Object.assign([],this.stock));
  }
}
