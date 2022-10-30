import { Injectable } from '@angular/core';
import { Sale } from '../sale.model';
import { AngularFireDatabase, AngularFireDatabaseModule, AngularFireList } from '@angular/fire/compat/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private dbPath ='/sales';
  salesRef: AngularFireList<Sale>;
  url:string = environment.databaseURL + 'sales.json/'

  constructor(private db: AngularFireDatabase,private http: HttpClient) { 
    this.salesRef = db.list(this.dbPath);

  }

  getAll(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.url);
  }

  create(sale: Sale) {
    return this.http.post<Sale>(this.url,sale);
  }

  update(key: string, value: any) {
    return this.http.put(this.url,+key,value);
  }
}
