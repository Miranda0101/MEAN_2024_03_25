import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ParentComponent } from './parent/parent.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'products', 
  loadChildren: ()=>import('./products/products.module').then(
    (m) => m.ProductsModule),

  },
  {path:'parent', component: ParentComponent},
  {path:'', component: HomeComponent},
  // {path:'**', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
