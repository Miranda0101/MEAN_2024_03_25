import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { MyFirstDirective } from './my-first.directive';
import { MyFirstPipe } from './my-first.pipe';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './products.service';


@NgModule({
  declarations: [
    ProductsComponent,
    MyFirstDirective,
    MyFirstPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ProductsComponent
  ],
  providers:[]
})
export class ProductsModule { }
