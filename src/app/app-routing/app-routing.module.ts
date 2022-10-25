import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from '../sales/sales.component';
import { StockComponent } from '../stock/stock.component';

export const appRoutes: Routes = [
  { path: 'stock', component: StockComponent },
  {path: 'sales',component: SalesComponent},
  {path: '', redirectTo: '/stock',pathMatch:'full'},

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { 

}
