import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './stock/article.model';
import { StockService } from './stock/stock.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:HttpClient,private stockService:StockService) { }

  addArticle(article:Article) {
    return this.http.post('https://bmk-store-default-rtdb.europe-west1.firebasedatabase.app/articles.json',article);
  }
  fetchArticles() {
   return this.http.get<Article[]>('https://bmk-store-default-rtdb.europe-west1.firebasedatabase.app/articles.json');
  }
}
