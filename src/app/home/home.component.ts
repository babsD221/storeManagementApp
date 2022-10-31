import { Component, OnInit } from '@angular/core';
import { SaleService } from '../services/sale.service';
import { OrderService } from '../services/order.service';
import { ArticleService } from '../services/article.service';
import { map } from 'rxjs';
import { Article } from '../stock/article.model';
import { Sale } from '../sale.model';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  soldQuantity: number = 0;
  totalSales:number = 0;
  stockQuantity: number = 0;
  stockValue: number = 0;
  orderNumbers: number =0;

  constructor(private saleService:SaleService, private orderService: OrderService, private articleService:ArticleService) { }

  ngOnInit(): void {

    this.saleService.getAll().subscribe(data => {
      if(data) {
        const sales:Sale[] = Object.keys(data).map((key:any) => {data[key].key = key; return data[key] })
        sales.forEach(sale =>{
          this.totalSales += sale.sellingPrice! * sale.quantity!;
          this.soldQuantity += sale.quantity!;
        })
      }

      
    });

    this.orderService.getAll().subscribe(data => {
      if(data) {
        const orders:Order[] = Object.keys(data).map((key:any) => {data[key].key = key; return data[key] })
        this.orderNumbers = orders.length;
      }

    });

    this.articleService.getAll().subscribe(data => {
      if(data) {
        const articles:Article[] = Object.keys(data).map((key:any) => {data[key].key = key; return data[key] })
        articles.forEach(article =>{
          this.stockValue += article.purchasePrice! * article.quantity!;
          this.stockQuantity += article.quantity!;
        })
      }

    });
      
    
  }

}
