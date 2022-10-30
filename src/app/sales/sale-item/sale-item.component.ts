import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Sale } from 'src/app/sale.model';

@Component({
  selector: '[app-sale-item]',
  templateUrl: './sale-item.component.html',
  styleUrls: ['./sale-item.component.css']
})
export class SaleItemComponent implements OnInit {
  @Input() sale: Sale;
  constructor() { }

  ngOnInit(): void {
  }

}
