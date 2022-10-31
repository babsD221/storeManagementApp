import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from '../../article.model';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})

export class ArticleEditComponent implements OnInit {
  
  currentArticle:{
    name:string,
    key:string,
    quantity: number,
    purchasePrice: number,
    sellingPrice: number,
    imgPath: string
  } = JSON.parse(localStorage.getItem('currentArticle')!);

  formEdit = new FormGroup({
    name: new FormControl(this.currentArticle.name,[Validators.required]),
    quantity: new FormControl(this.currentArticle.quantity,[Validators.required]),
    pPrice: new FormControl(this.currentArticle.purchasePrice,[Validators.required]),
    sPrice:new FormControl(this.currentArticle.sellingPrice,[Validators.required]),
    imgPath: new FormControl(this.currentArticle.imgPath,[Validators.required])
  });


  constructor(private articleService: ArticleService, private router: Router) { }


  ngOnInit(): void {
  }


  onSubmit() {

    const name = this.formEdit.value.name!;
    const quantity = Number(this.formEdit.value.quantity!);
    const pPrice = Number(this.formEdit.value.pPrice!);
    const sPrice = Number(this.formEdit.value.sPrice!);
    const imgPath = this.formEdit.value.imgPath!;
    const article = new Article('1',name,quantity,pPrice,sPrice,imgPath);
    this.articleService.update(this.currentArticle.key,JSON.stringify(article)).subscribe(()=>{
      this.router.navigate(['stock']);
    });

  }

  onEditCancel() {
    this.router.navigate(['stock']);
  }
}
