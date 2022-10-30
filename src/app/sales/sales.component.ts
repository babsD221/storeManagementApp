import { Component, OnInit } from '@angular/core';
import { Sale } from '../sale.model';
import { StockService } from '../stock/stock.service';
import { SaleService } from '../services/sale.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales:Sale[];
  constructor(private saleService:SaleService,private stockService:StockService ) { }

  ngOnInit(): void {
    this.saleService.getAll().subscribe((data) => {
      this.sales =Object.keys(data).map((key:any) => {data[key].key = key; return data[key] });
    });
  }

}
