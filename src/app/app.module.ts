import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { StockComponent } from './stock/stock.component';
import { ArticlesListComponent } from './stock/articles-list/articles-list.component';
import { ArticleItemComponent } from './stock/articles-list/article-item/article-item.component';
import { ArticleAddComponent } from './stock/article-add/article-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { SalesComponent } from './sales/sales.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SalesAddComponent } from './sales/sales-add/sales-add.component';
import { StockOrdersComponent } from './stock/stock-orders/stock-orders.component';
import { StockOrderAddComponent } from './stock/stock-order-add/stock-order-add.component';
import { StockItemComponent } from './stock/stock-orders/stock-item/stock-item.component';
import { SaleItemComponent } from './sales/sale-item/sale-item.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StockComponent,
    ArticlesListComponent,
    ArticleItemComponent,
    ArticleAddComponent,
    SalesComponent,
    SalesAddComponent,
    StockOrdersComponent,
    StockOrderAddComponent,
    StockItemComponent,
    SaleItemComponent,
    HomeComponent,
    AuthPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
