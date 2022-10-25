import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article.model';
import { Observable } from 'rxjs';
import { DataStorageService } from 'src/app/data-storage.service';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  stock: Article[] =[];
  obs:Observable<Article[]>;
  constructor(private dataService:DataStorageService,private stockService:StockService, private router:Router, private route:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.dataService.fetchArticles().subscribe(
      articles =>{
        this.stockService.setStock(Object.keys(articles).map((key:any) =>{return articles[key]}));
        this.stock = this.stockService.getStock();
      } 
     );
    }

  onNewProduct() {
    this.router.navigate(['add-article'], {relativeTo:this.route});
  }
}