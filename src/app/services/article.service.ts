import { Injectable } from '@angular/core';
import { Article } from '../stock/article.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface FireList {
  payload:Article
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  url:string = environment.databaseURL + 'articles.json/'
  constructor( private http: HttpClient) { 
  }

  getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
    //return this.articlesRef;
  }

  get(key: string) {
    return this.http.get<Article>(environment.databaseURL + 'articles/' + key + '.json');
  }

  create(article: Article) {
    return this.http.post(this.url,article);
    //return this.articlesRef.push(article);
  }

  update(key: string, value: any) {

    return this.http.put(environment.databaseURL + 'articles/'+ key + '.json',value);

  }

}
