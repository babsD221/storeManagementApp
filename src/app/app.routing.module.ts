import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { SalesComponent } from './sales/sales.component';
import { ArticleAddComponent } from './stock/article-add/article-add.component';
import { StockOrderAddComponent } from './stock/stock-order-add/stock-order-add.component';
import { StockOrdersComponent } from './stock/stock-orders/stock-orders.component';
import { HomeComponent } from './home/home.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthGard } from './services/aut-guard';

const routes: Routes = [
  {path:'home',canActivate:[AuthGard],component: HomeComponent},
  { path: 'stock',canActivate:[AuthGard], component: StockComponent },
  {path: 'sales',canActivate:[AuthGard],component: SalesComponent},
  {path: 'orders',canActivate:[AuthGard],component: StockOrdersComponent},

  { path: 'stock/add-article',canActivate:[AuthGard], component: ArticleAddComponent },
  { path: 'stock/add-order',canActivate:[AuthGard], component: StockOrderAddComponent },
  {path: '', redirectTo: '/home',pathMatch:'full'},
  {path: 'auth', component:AuthPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
