import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../article.model';
import { StockService } from '../../stock.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: '[app-article-item]',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article;
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  placeOrder() {
    console.log(this.article.key!);
    localStorage.setItem('currentArticleKey',this.article.key!);
    localStorage.setItem('currentArticleQty',this.article.quantity?.toString()!);
    localStorage.setItem('currentArticleName',this.article.name!);
    localStorage.setItem('currentArticleImgPath',this.article.imgPath!);

    this.router.navigate(['add-order'],{relativeTo:this.route});
  }

}
