import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CanVisitGuard } from './product-detail/can-visit.guard';
import { FetchDataResolver } from './fetch-data.resolver';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  {
    path: 'detail/:id',
    component: ProductDetailComponent,
    resolve: { productData: FetchDataResolver, },
 data:{preload: true}
  },
  // {path:'**', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

// RouterEvent
// NavigationStart
// RouteConfigLoadStart
// RouteConfigLoadEnds
// RouteRecoginzed
// GuardsCheckStart
// ChildActivationStart
// ActivationStart
// GuardsCheckEnd
// ResolveStart
// ResolveEnd
// ChildActivationEnd
// ActivationEnd
// NavigationEnd
// NavigationCancel
// NavigationError
// Scroll
