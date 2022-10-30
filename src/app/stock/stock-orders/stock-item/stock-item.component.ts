import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { Sale } from 'src/app/sale.model';
import { ArticleService } from 'src/app/services/article.service';
import { OrderService } from 'src/app/services/order.service';
import { SaleService } from 'src/app/services/sale.service';
import { Article } from '../../article.model';
import { StockService } from '../../stock.service';

@Component({
  selector: '[app-stock-item]',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  @Input() order: Order;
  constructor(private stockService:StockService,private saleService: SaleService,private articleService:ArticleService,private orderService:OrderService,private router: Router) { }

  ngOnInit(): void {
  }
  confirmOrder() {
    const sale: Sale = new Sale(this.order.product_name!,this.order.product_imgPath!,this.order.quantity!,this.order.sellingPrice!,this.order.clientName!
      ,this.order.address!,this.order.phoneNumber!,this.order.details!);
      const articleKey = localStorage.getItem('currentArticleKey')!;
      const articleQty = Number(localStorage.getItem('currentArticleQty')!);
      this.saleService.create(sale).subscribe(()=>{
        this.articleService.update(articleKey,{quantity:articleQty-1});
        this.router.navigate(['sales']);
      });
  }

  deleteOrder() {
    console.log(this.order.key);
   this.orderService.delete(this.order.key!).subscribe(()=>{
    this.stockService.deleteOrder(this.order.key!);
   });
  }
}
