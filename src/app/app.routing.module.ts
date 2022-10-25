import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { SalesComponent } from './sales/sales.component';
import { ArticleAddComponent } from './stock/article-add/article-add.component';

const routes: Routes = [
  { path: 'stock', component: StockComponent },
  {path: 'sales',component: SalesComponent},
  { path: 'stock/add-article', component: ArticleAddComponent },

  {path: '', redirectTo: '/stock',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
