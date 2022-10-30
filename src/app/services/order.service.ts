import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { Order } from '../models/order.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url:string = environment.databaseURL + 'orders.json/'

  constructor(private http:HttpClient) {

   }

  getAll() {
    return this.http.get<Order[]>(this.url);
  }

  create(order: Order) {
    return this.http.post<Order>(this.url,order);
  }

  update(key: string, value: any) {
    return this.http.put<Order>(this.url + key,value);
  }

  delete(key: string) {
    return this.http.delete<Order>(environment.databaseURL + 'orders/' + key +'.json');
  }

}
