import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CanVisitGuard } from './product-detail/can-visit.guard';

const routes: Routes = [
  {path:'', component: ProductsComponent},
  { path: 'detail', component: ProductDetailComponent, canActivate: [CanVisitGuard]}
  // {path:'**', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
