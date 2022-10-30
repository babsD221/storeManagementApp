import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { StockService } from '../stock.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-stock-orders',
  templateUrl: './stock-orders.component.html',
  styleUrls: ['./stock-orders.component.css']
})
export class StockOrdersComponent implements OnInit {
  orders:Order[];
  constructor(private orderService:OrderService, private stockService: StockService) { }

  ngOnInit(): void {
    this.stockService.orderChanged$.subscribe((data)=>{
        this.orders = this.stockService.getOrders();
    });
    this.orderService.getAll().subscribe(data => {
      if(data) {
        this.stockService.setOrders(Object.keys(data).map((key:any) => {data[key].key = key; return data[key] }));
        this.orders = this.stockService.getOrders();
      }

    });
  }

}
