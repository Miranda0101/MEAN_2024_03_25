import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { MyFirstDirective } from './my-first.directive';
import { MyFirstPipe } from './my-first.pipe';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './products.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [
    ProductsComponent,
    MyFirstDirective,
    MyFirstPipe,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  exports:[
    ProductsComponent
  ],
  providers:[]
})
export class ProductsModule { }
