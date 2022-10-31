import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article.model';
import { Observable } from 'rxjs';
import { StockService } from '../stock.service';
import { ArticleService } from 'src/app/services/article.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  stock?: Article[];
  obs:Observable<Article[]>;
  constructor(private articleService:ArticleService,private stockService:StockService, private router:Router, private route:ActivatedRoute) {
   }

  ngOnInit(): void {
     this.articleService.getAll().subscribe((data) => {
      this.stock =Object.keys(data).map((key:any) => {data[key].key = key; return data[key] });
    });
    }  
    

  onNewProduct() {
    this.router.navigate(['add-article'], {relativeTo:this.route});
  }
}