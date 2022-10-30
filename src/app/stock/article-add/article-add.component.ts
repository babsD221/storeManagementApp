import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from '../article.model';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {
  @ViewChild('formData') formDataRef: ElementRef;
  articleForm = new FormGroup({
    name: new FormControl,
    quantity: new FormControl,
    pPrice: new FormControl,
    sPrice:new FormControl,
    imgPath: new FormControl
  });
  article: Article = new Article();
  constructor(private stockService:StockService,private router: Router, private articleService:ArticleService) { }

  ngOnInit(): void {
  }
  onArticleAdded() {

  }
  onArticleAddCancel() {
    this.router.navigate(['stock']);
  }
  onSubmit(event:MouseEvent){
   // event.preventDefault();

    let id =1;
    if(this.stockService.getStock() !== undefined)
    {
     id =this.stockService.getStock().length +1
    }
    console.log("identifiant " + id);
    this.article.id = id.toString();
    const name = this.articleForm.value.name!;
    const quantity = this.articleForm.value.quantity!;
    const pPrice = this.articleForm.value.pPrice!;
    const sPrice = this.articleForm.value.sPrice!;
    const imgPath = this.articleForm.value.imgPath!;
    const article = new Article('1',name,quantity,pPrice,sPrice,imgPath);
    this.articleService.create(article).subscribe((resData)=>{
      console.log(resData);
      this.router.navigate(['stock']);
    });

  }
}
