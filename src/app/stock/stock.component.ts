import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  providers:[StockService]
})
export class StockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
