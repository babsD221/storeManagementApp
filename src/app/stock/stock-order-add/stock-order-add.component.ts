import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Order } from 'src/app/models/order.model';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-stock-order-add',
  templateUrl: './stock-order-add.component.html',
  styleUrls: ['./stock-order-add.component.css']
})
export class StockOrderAddComponent implements OnInit {
  orderForm = new FormGroup({
    name: new FormControl,
    sellingPrice: new FormControl,
    quantity: new FormControl,
    details: new FormControl,
    address: new FormControl,
    phoneNumber: new FormControl
  })
  constructor(private orderService: OrderService,private stockService:StockService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(event:MouseEvent){
    event.preventDefault();
    const id = localStorage.getItem('currentArticleId');
    const articleName: string | null = localStorage.getItem('currentArticleName')
     const clientName = this.orderForm.value.name;
     const imgPath =localStorage.getItem('currentArticleImgPath');
     const quantity = this.orderForm.value.quantity;
     const sPrice = this.orderForm.value.sellingPrice;
     const details = this.orderForm.value.details;
     const address = this.orderForm.value.address;
     const phoneNumber = this.orderForm.value.phoneNumber;
     const order:Order = new Order(articleName!,clientName,quantity,imgPath!,sPrice,address,details,phoneNumber,new Date().toLocaleString('en-US', {month: 'long', day: 'numeric', year: 'numeric'}));
     this.stockService.addOrder(order);
     this.orderService.create(order).subscribe(() => {
      this.router.navigate(['orders']);
     });
   }

}
